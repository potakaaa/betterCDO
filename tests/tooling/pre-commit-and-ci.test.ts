import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { describe, it, expect } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function read(rel: string): string {
  return readFileSync(join(root, rel), "utf8");
}

describe("package.json tooling", () => {
  it("configures husky prepare and lint-staged", () => {
    const pkg = JSON.parse(read("package.json")) as {
      scripts?: { prepare?: string; test?: string };
      "lint-staged"?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    expect(pkg.scripts?.prepare).toBe("husky");
    expect(pkg.scripts?.test).toBeDefined();
    expect(pkg["lint-staged"]?.["*.{js,jsx,ts,tsx}"]).toContain(
      "eslint --max-warnings 0",
    );
    expect(pkg.devDependencies?.husky).toBeDefined();
    expect(pkg.devDependencies?.["lint-staged"]).toBeDefined();
    expect(pkg.devDependencies?.vitest).toBeDefined();
  });
});

describe("Husky hooks", () => {
  it("pre-commit runs lint-staged", () => {
    const p = join(root, ".husky/pre-commit");
    expect(existsSync(p)).toBe(true);
    const body = read(".husky/pre-commit");
    expect(body).toMatch(/lint-staged/);
  });

  it("pre-push runs lint, test, and build", () => {
    const p = join(root, ".husky/pre-push");
    expect(existsSync(p)).toBe(true);
    const body = read(".husky/pre-push");
    expect(body).toMatch(/npm run lint/);
    expect(body).toMatch(/npm run test/);
    expect(body).toMatch(/npm run build/);
  });
});

describe("GitHub Actions CI workflow", () => {
  it("targets PRs to development and main and runs the expected steps", () => {
    const p = join(root, ".github/workflows/ci.yml");
    expect(existsSync(p)).toBe(true);
    const yml = read(".github/workflows/ci.yml");
    expect(yml).toContain("pull_request:");
    expect(yml).toContain("development");
    expect(yml).toContain("main");
    expect(yml).toContain("npm ci");
    expect(yml).toContain("npm run lint");
    expect(yml).toContain("npm run test");
    expect(yml).toContain("npm run build");
    expect(yml).toContain('node-version: "20"');
  });
});
