'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import { IncomeSourcesChart, ExpenditureChart } from '@/components/charts/Charts';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

// Sample budget data for Q1 and Q2 - replace with actual data from your LGU
const budgetData = {
  q1: {
    totalIncome: '₱0.00 M',
    totalExpense: '₱0.00 M',
    netIncome: '₱0.00 M',
    fundBalance: '₱0.00 M',
    income: {
      local: { amount: '₱0.00 M', pct: '0%', value: 0 },
      external: { amount: '₱0.00 M', pct: '0%', value: 0 }
    },
    expenditure: {
      gps: { amount: '₱0.00 M', pct: '0%', value: 0 },
      social: { amount: '₱0.00 M', pct: '0%', value: 0 },
      economic: { amount: '₱0.00 M', pct: '0%', value: 0 },
      debt: { amount: '₱0.00 M', pct: '0%', value: 0 }
    },
    totalIncomeValue: 0,
    totalExpenseValue: 0
  },
  q2: {
    totalIncome: '₱0.00 M',
    totalExpense: '₱0.00 M',
    netIncome: '₱0.00 M',
    fundBalance: '₱0.00 M',
    income: {
      local: { amount: '₱0.00 M', pct: '0%', value: 0 },
      external: { amount: '₱0.00 M', pct: '0%', value: 0 }
    },
    expenditure: {
      gps: { amount: '₱0.00 M', pct: '0%', value: 0 },
      social: { amount: '₱0.00 M', pct: '0%', value: 0 },
      economic: { amount: '₱0.00 M', pct: '0%', value: 0 },
      debt: { amount: '₱0.00 M', pct: '0%', value: 0 }
    },
    totalIncomeValue: 0,
    totalExpenseValue: 0
  }
};

export default function BudgetPage() {
  const [activeQuarter, setActiveQuarter] = useState<'q1' | 'q2'>('q1');
  const currentData = budgetData[activeQuarter];
  const { lguName, fullLocation, labels } = useSiteConfig();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Budget &amp; Transparency</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-shield-check"></i> Financial Transparency
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Budget &amp; Financial Transparency</h1>
            <p className="text-lg text-white/90">Tracking {labels.lguTypeLabel.toLowerCase()} finances and projects for accountability</p>
          </div>
        </div>
      </section>

      {/* SRE Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                <i className="bi bi-graph-up-arrow"></i> Financial Report
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Statement of Receipts &amp; Expenditures</h2>
              <p className="text-gray-500">FY 2025 quarterly financial performance</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className={`px-4 py-2 rounded-lg font-medium transition-all ${activeQuarter === 'q1' ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:border-primary-500'}`}
                onClick={() => setActiveQuarter('q1')}
              >
                <span className="font-bold">Q1</span> <span className="text-sm opacity-75">Jan - Mar</span>
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg font-medium transition-all ${activeQuarter === 'q2' ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:border-primary-500'}`}
                onClick={() => setActiveQuarter('q2')}
              >
                <span className="font-bold">Q2</span> <span className="text-sm opacity-75">Apr - Jun</span>
              </button>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-lg">
                  <i className="bi bi-arrow-down-circle text-xl"></i>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-green-700">{currentData.totalIncome}</span>
                  <span className="text-sm text-green-600">Total Income</span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-lg">
                  <i className="bi bi-arrow-up-circle text-xl"></i>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-red-700">{currentData.totalExpense}</span>
                  <span className="text-sm text-red-600">Total Expenditures</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  <i className="bi bi-plus-slash-minus text-xl"></i>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-blue-700">{currentData.netIncome}</span>
                  <span className="text-sm text-blue-600">Net Operating Income</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg">
                  <i className="bi bi-wallet2 text-xl"></i>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-purple-700">{currentData.fundBalance}</span>
                  <span className="text-sm text-purple-600">Fund Balance (End)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Income Sources */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <i className="bi bi-pie-chart text-primary-600"></i> Income Sources
                </h3>
              </div>
              <div className="p-6">
                <div className="h-48 mb-4">
                  <IncomeSourcesChart
                    localValue={currentData.income.local.value}
                    externalValue={currentData.income.external.value}
                    totalIncome={currentData.totalIncomeValue}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <div>
                        <span className="font-medium text-gray-900">Local Sources</span>
                        <span className="block text-xs text-gray-500">Tax & Non-Tax Revenue</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{currentData.income.local.amount}</span>
                      <span className="block text-xs text-gray-500">{currentData.income.local.pct}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <div>
                        <span className="font-medium text-gray-900">External Sources</span>
                        <span className="block text-xs text-gray-500">National Tax Allotment</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{currentData.income.external.amount}</span>
                      <span className="block text-xs text-gray-500">{currentData.income.external.pct}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expenditure Allocation */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <i className="bi bi-bar-chart text-primary-600"></i> Expenditure Allocation
                </h3>
              </div>
              <div className="p-6">
                <div className="h-48 mb-4">
                  <ExpenditureChart
                    gpsValue={currentData.expenditure.gps.value}
                    socialValue={currentData.expenditure.social.value}
                    economicValue={currentData.expenditure.economic.value}
                    debtValue={currentData.expenditure.debt.value}
                    totalExpense={currentData.totalExpenseValue}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                      <div>
                        <span className="font-medium text-gray-900">General Public Services</span>
                        <span className="block text-xs text-gray-500">Administration & Operations</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{currentData.expenditure.gps.amount}</span>
                      <span className="block text-xs text-gray-500">{currentData.expenditure.gps.pct}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <div>
                        <span className="font-medium text-gray-900">Social Services</span>
                        <span className="block text-xs text-gray-500">Health, Education, Welfare</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{currentData.expenditure.social.amount}</span>
                      <span className="block text-xs text-gray-500">{currentData.expenditure.social.pct}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      <div>
                        <span className="font-medium text-gray-900">Economic Services</span>
                        <span className="block text-xs text-gray-500">Infrastructure & Development</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{currentData.expenditure.economic.amount}</span>
                      <span className="block text-xs text-gray-500">{currentData.expenditure.economic.pct}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                      <div>
                        <span className="font-medium text-gray-900">Debt Service</span>
                        <span className="block text-xs text-gray-500">Interest & Charges</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{currentData.expenditure.debt.amount}</span>
                      <span className="block text-xs text-gray-500">{currentData.expenditure.debt.pct}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bureau of Local Government Finance (BLGF)</a> — Update with your LGU&apos;s actual financial data
          </p>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
              <i className="bi bi-building-gear"></i> Public Works
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Infrastructure Investments</h2>
            <p className="text-gray-500">Major development projects serving the community</p>
          </div>

          {/* Sample Project */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">2024</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <i className="bi bi-water"></i> Flood Control
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Sample Flood Control Project</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <i className="bi bi-geo-alt"></i> {fullLocation}
              </p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Type of Work</span>
                <span className="block font-medium text-gray-900">Construction of Flood Mitigation Structure</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Contractor</span>
                <span className="block font-medium text-gray-900">Sample Contractor Inc.</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Contract Cost</span>
                <span className="block font-bold text-primary-600 text-lg">₱0.00</span>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <i className="bi bi-info-circle"></i> Replace with actual project data
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DPWH Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
              <i className="bi bi-building"></i> National Government Projects
            </span>
            <h2 className="text-2xl font-bold text-gray-900">DPWH Infrastructure Projects in {lguName}</h2>
            <p className="text-gray-500">Implementing Agency: District Engineering Office</p>
          </div>

          <div id="dpwh-projects-container" className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <p className="text-gray-500 text-center">Configure DPWH projects data in public/data/dpwh-projects.json</p>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2 mt-4">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DPWH Transparency Portal</a>
          </p>
        </div>
      </section>

      <Script src="/assets/js/dpwh-projects.js" strategy="lazyOnload" />
    </>
  );
}
