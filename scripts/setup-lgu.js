#!/usr/bin/env node

/**
 * LGU Setup Script
 * 
 * This script helps configure the BetterGov portal for a new municipality or province.
 * Run with: node scripts/setup-lgu.js
 * Or: npm run setup-lgu
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONFIG_DIR = path.join(__dirname, '..', 'config');

// Ensure config directory exists
if (!fs.existsSync(CONFIG_DIR)) {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log('\n🏛️  BetterGov LGU Setup Wizard\n');
  console.log('This wizard will help you configure the portal for your LGU.\n');
  console.log('═'.repeat(60) + '\n');

  // LGU Type
  console.log('Step 1: LGU Type');
  console.log('─'.repeat(40));
  let lguType = '';
  while (!['municipality', 'province', 'm', 'p'].includes(lguType.toLowerCase())) {
    lguType = await question('Is this a (M)unicipality or (P)rovince? [M/P]: ');
  }
  lguType = lguType.toLowerCase().startsWith('p') ? 'province' : 'municipality';
  console.log(`✓ LGU Type: ${lguType === 'province' ? 'Province' : 'Municipality'}\n`);

  // Basic Info
  console.log('Step 2: Basic Information');
  console.log('─'.repeat(40));
  
  const municipality = lguType === 'municipality' 
    ? await question('Municipality name (e.g., Real): ')
    : '';
  
  const province = await question(`Province name (e.g., Quezon): `);
  const region = await question('Region (e.g., Region IV-A (CALABARZON)): ');
  const municipalityAcronym = await question('LGU Acronym (e.g. CDO): ');
  
  const lguName = lguType === 'municipality' ? municipality : province;
  const lguAcronym = municipalityAcronym;
  const siteId = await question(`Site ID (e.g., better${lguName.toLowerCase().replace(/\s+/g, '')}): `) 
    || `better${lguName.toLowerCase().replace(/\s+/g, '')}`;
  const domain = await question(`Domain (e.g., ${siteId}.org): `) || `${siteId}.org`;
  
  console.log('');

  // Contact Info
  console.log('Step 3: Contact Information (press Enter to skip)');
  console.log('─'.repeat(40));
  const phone = await question('Main phone number: ');
  const mobile = await question('Mobile number: ');
  const email = await question('Email address: ');
  const address = await question(`Address (default: ${lguType === 'province' ? 'Provincial Capitol' : 'Municipal Hall'}, ${lguName}): `) 
    || `${lguType === 'province' ? 'Provincial Capitol' : 'Municipal Hall'}, ${lguName}, ${province}`;
  const postalCode = await question('Postal code: ');
  console.log('');

  // Social Links
  console.log('Step 4: Social Media (press Enter to skip)');
  console.log('─'.repeat(40));
  const facebook = await question('Facebook URL: ');
  const twitter = await question('Twitter URL: ');
  const github = await question('GitHub repository URL: ');
  console.log('');

  // Coordinates
  console.log('Step 5: Map Coordinates (press Enter for defaults)');
  console.log('─'.repeat(40));
  const lat = parseFloat(await question('Latitude (e.g., 14.6629): ')) || 14.6629;
  const lng = parseFloat(await question('Longitude (e.g., 121.6047): ')) || 121.6047;
  console.log('');

  // Theme
  console.log('Step 6: Theme (press Enter for default green)');
  console.log('─'.repeat(40));
  const themeColor = await question('Theme color hex (e.g., #1a5f2a): ') || '#1a5f2a';
  console.log('');

  // Generate configs
  console.log('═'.repeat(60));
  console.log('\n📝 Generating configuration files...\n');

  // site.json
  const siteConfig = {
    lguType,
    municipality,
    lguAcronym,
    province,
    region,
    siteId,
    domain,
    tagline: `Your digital gateway to LGU ${lguName} services`,
    themeColor,
    contact: {
      phone,
      mobile,
      email,
      address,
      postalCode
    },
    social: {
      facebook,
      twitter,
      github
    },
    coordinates: {
      lat,
      lng
    },
    logo: {
      main: '/assets/images/logo/logo.svg',
      white: '/assets/images/logo/logo-white.svg',
      favicon: '/assets/images/logo/favicon.svg'
    }
  };

  fs.writeFileSync(
    path.join(CONFIG_DIR, 'site.json'),
    JSON.stringify(siteConfig, null, 2)
  );
  console.log('✓ Created config/site.json');

  // officials.json (template)
  const officialsConfig = {
    executive: [
      {
        id: lguType === 'province' ? 'governor' : 'mayor',
        name: '',
        position: lguType === 'province' ? 'governor' : 'mayor',
        title: lguType === 'province' ? 'Provincial Governor' : 'Municipal Mayor',
        email: '',
        phone: ''
      },
      {
        id: lguType === 'province' ? 'vice-governor' : 'vice-mayor',
        name: '',
        position: lguType === 'province' ? 'vice_governor' : 'vice_mayor',
        title: lguType === 'province' ? 'Provincial Vice Governor' : 'Municipal Vice Mayor',
        email: '',
        phone: ''
      }
    ],
    legislative: [],
    departments: []
  };

  fs.writeFileSync(
    path.join(CONFIG_DIR, 'officials.json'),
    JSON.stringify(officialsConfig, null, 2)
  );
  console.log('✓ Created config/officials.json');

  // subdivisions.json (template)
  const subdivisionsConfig = {
    type: lguType === 'province' ? 'municipality' : 'barangay',
    count: 0,
    items: []
  };

  fs.writeFileSync(
    path.join(CONFIG_DIR, 'subdivisions.json'),
    JSON.stringify(subdivisionsConfig, null, 2)
  );
  console.log('✓ Created config/subdivisions.json');

  // statistics.json (template)
  const statisticsConfig = {
    population: {
      count: 0,
      year: new Date().getFullYear(),
      source: 'Census'
    },
    landArea: {
      value: 0,
      unit: 'km²',
      source: `Total ${lguType === 'province' ? 'Provincial' : 'Municipal'} Area`
    },
    subdivisions: {
      count: 0,
      type: lguType === 'province' ? 'Municipalities/Cities' : 'Barangays',
      source: 'Administrative Units'
    },
    incomeClass: {
      class: '',
      description: lguType === 'province' ? 'Province' : 'Municipality',
      source: 'Income Classification'
    },
    additionalStats: []
  };

  fs.writeFileSync(
    path.join(CONFIG_DIR, 'statistics.json'),
    JSON.stringify(statisticsConfig, null, 2)
  );
  console.log('✓ Created config/statistics.json');

  // Keep existing hotlines.json, history.json, translations.json if they exist
  const templateFiles = ['hotlines.json', 'history.json', 'translations.json'];
  templateFiles.forEach(file => {
    const filePath = path.join(CONFIG_DIR, file);
    if (!fs.existsSync(filePath)) {
      let content = {};
      if (file === 'hotlines.json') {
        content = {
          emergency: [],
          medical: [],
          government: [],
          utilities: []
        };
      } else if (file === 'history.json') {
        content = {
          timeline: [],
          facts: []
        };
      } else if (file === 'translations.json') {
        content = { en: {}, fil: {}, ilo: {} };
      }
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`✓ Created config/${file}`);
    }
  });

  console.log('\n═'.repeat(60));
  console.log('\n🎉 Setup complete!\n');
  console.log('Next steps:');
  console.log('1. Edit config/officials.json to add your officials');
  console.log('2. Edit config/subdivisions.json to add barangays/municipalities');
  console.log('3. Edit config/hotlines.json to add emergency numbers');
  console.log('4. Edit config/history.json to add historical timeline');
  console.log('5. Edit config/statistics.json to add population and other stats');
  console.log('6. Replace logo files in public/assets/images/logo/');
  console.log('\nRun `npm run dev` to start the development server.\n');

  rl.close();
}

main().catch((err) => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});
