'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/transparency-v2.css" />
      
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Budget &amp; Transparency</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="trans-hero-v2">
        <div className="container">
          <div className="trans-hero-content-v2">
            <span className="trans-hero-badge-v2"><i className="bi bi-shield-check"></i> Financial Transparency</span>
            <h1>Budget &amp; Financial Transparency</h1>
            <p>Tracking {labels.lguTypeLabel.toLowerCase()} finances and projects for accountability</p>
          </div>
        </div>
      </section>

      {/* SRE Section */}
      <section className="sre-section-v2 animate-on-scroll">
        <div className="container">
          <div className="sre-header-v2">
            <div className="sre-title-group">
              <span className="sre-label"><i className="bi bi-graph-up-arrow"></i> Financial Report</span>
              <h2>Statement of Receipts &amp; Expenditures</h2>
              <p>FY 2025 quarterly financial performance</p>
            </div>
            <div className="sre-period-toggle" aria-label="Select fiscal quarter">
              <button 
                type="button" 
                className={`sre-period-btn ${activeQuarter === 'q1' ? 'active' : ''}`}
                onClick={() => setActiveQuarter('q1')}
              >
                <span className="sre-period-q">Q1</span>
                <span className="sre-period-range">Jan - Mar</span>
              </button>
              <button 
                type="button" 
                className={`sre-period-btn ${activeQuarter === 'q2' ? 'active' : ''}`}
                onClick={() => setActiveQuarter('q2')}
              >
                <span className="sre-period-q">Q2</span>
                <span className="sre-period-range">Apr - Jun</span>
              </button>
            </div>
          </div>

          <div className="sre-metrics-row">
            <div className="sre-metric-card sre-metric-income">
              <div className="sre-metric-icon"><i className="bi bi-arrow-down-circle"></i></div>
              <div className="sre-metric-data">
                <span className="sre-metric-value" id="sre-total-income">{currentData.totalIncome}</span>
                <span className="sre-metric-label">Total Income</span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-expense">
              <div className="sre-metric-icon"><i className="bi bi-arrow-up-circle"></i></div>
              <div className="sre-metric-data">
                <span className="sre-metric-value" id="sre-total-expense">{currentData.totalExpense}</span>
                <span className="sre-metric-label">Total Expenditures</span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-net">
              <div className="sre-metric-icon"><i className="bi bi-plus-slash-minus"></i></div>
              <div className="sre-metric-data">
                <span className="sre-metric-value" id="sre-net-income">{currentData.netIncome}</span>
                <span className="sre-metric-label">Net Operating Income</span>
              </div>
            </div>
            <div className="sre-metric-card sre-metric-balance">
              <div className="sre-metric-icon"><i className="bi bi-wallet2"></i></div>
              <div className="sre-metric-data">
                <span className="sre-metric-value" id="sre-fund-balance">{currentData.fundBalance}</span>
                <span className="sre-metric-label">Fund Balance (End)</span>
              </div>
            </div>
          </div>

          <div className="sre-breakdown-v2">
            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3><i className="bi bi-pie-chart"></i> Income Sources</h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-chart-container">
                  <IncomeSourcesChart 
                    localValue={currentData.income.local.value} 
                    externalValue={currentData.income.external.value}
                    totalIncome={currentData.totalIncomeValue}
                  />
                </div>
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="local">
                    <span className="sre-item-indicator sre-indicator-local"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Local Sources</span>
                      <span className="sre-item-detail">Tax &amp; Non-Tax Revenue</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-income-local">{currentData.income.local.amount}</span>
                      <span className="sre-item-pct" id="sre-income-local-pct">{currentData.income.local.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="external">
                    <span className="sre-item-indicator sre-indicator-external"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">External Sources</span>
                      <span className="sre-item-detail">National Tax Allotment</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-income-external">{currentData.income.external.amount}</span>
                      <span className="sre-item-pct" id="sre-income-external-pct">{currentData.income.external.pct}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sre-breakdown-panel">
              <div className="sre-panel-header">
                <h3><i className="bi bi-bar-chart"></i> Expenditure Allocation</h3>
              </div>
              <div className="sre-panel-body">
                <div className="sre-chart-container">
                  <ExpenditureChart 
                    gpsValue={currentData.expenditure.gps.value}
                    socialValue={currentData.expenditure.social.value}
                    economicValue={currentData.expenditure.economic.value}
                    debtValue={currentData.expenditure.debt.value}
                    totalExpense={currentData.totalExpenseValue}
                  />
                </div>
                <div className="sre-breakdown-list">
                  <div className="sre-breakdown-item" data-type="gps">
                    <span className="sre-item-indicator sre-indicator-gps"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">General Public Services</span>
                      <span className="sre-item-detail">Administration &amp; Operations</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-gps">{currentData.expenditure.gps.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-gps-pct">{currentData.expenditure.gps.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="social">
                    <span className="sre-item-indicator sre-indicator-social"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Social Services</span>
                      <span className="sre-item-detail">Health, Education, Welfare</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-social">{currentData.expenditure.social.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-social-pct">{currentData.expenditure.social.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="economic">
                    <span className="sre-item-indicator sre-indicator-economic"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Economic Services</span>
                      <span className="sre-item-detail">Infrastructure &amp; Development</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-economic">{currentData.expenditure.economic.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-economic-pct">{currentData.expenditure.economic.pct}</span>
                    </div>
                  </div>
                  <div className="sre-breakdown-item" data-type="debt">
                    <span className="sre-item-indicator sre-indicator-debt"></span>
                    <div className="sre-item-info">
                      <span className="sre-item-name">Debt Service</span>
                      <span className="sre-item-detail">Interest &amp; Charges</span>
                    </div>
                    <div className="sre-item-values">
                      <span className="sre-item-amount" id="sre-exp-debt">{currentData.expenditure.debt.amount}</span>
                      <span className="sre-item-pct" id="sre-exp-debt-pct">{currentData.expenditure.debt.pct}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="sre-source"><i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer">Bureau of Local Government Finance (BLGF)</a> — Update with your LGU&apos;s actual financial data</p>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="infra-section-v5 animate-on-scroll">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5"><i className="bi bi-building-gear"></i> Public Works</span>
            <h2>Infrastructure Investments</h2>
            <p>Major development projects serving the community</p>
          </div>

          {/* Sample Infrastructure Projects - Replace with actual projects */}
          <div className="infra-project-v5">
            <div className="infra-project-main">
              <div className="infra-project-tags">
                <span className="infra-tag-year">2024</span>
                <span className="infra-tag-category"><i className="bi bi-water"></i> Flood Control</span>
              </div>
              <h3>Sample Flood Control Project</h3>
              <p className="infra-location"><i className="bi bi-geo-alt"></i> {fullLocation}</p>
            </div>
            <div className="infra-project-details">
              <div className="infra-detail-row">
                <div className="infra-detail-col">
                  <span className="infra-detail-label">Type of Work</span>
                  <span className="infra-detail-value">Construction of Flood Mitigation Structure</span>
                </div>
                <div className="infra-detail-col">
                  <span className="infra-detail-label">Contractor</span>
                  <span className="infra-detail-value">Sample Contractor Inc.</span>
                </div>
                <div className="infra-detail-col infra-detail-cost">
                  <span className="infra-detail-label">Contract Cost</span>
                  <span className="infra-detail-value">₱0.00</span>
                </div>
              </div>
            </div>
            <div className="infra-project-footer">
              <span className="infra-source"><i className="bi bi-info-circle"></i> Replace with actual project data</span>
            </div>
          </div>
        </div>
      </section>

      {/* DPWH Projects Section */}
      <section className="infra-section-v5 infra-section-alt animate-on-scroll">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5"><i className="bi bi-building"></i> National Government Projects</span>
            <h2>DPWH Infrastructure Projects in {lguName}</h2>
            <p>Implementing Agency: District Engineering Office</p>
          </div>

          <div id="dpwh-projects-container">
            {/* DPWH projects will be loaded dynamically */}
            <p className="loading-text">Configure DPWH projects data in public/data/dpwh-projects.json</p>
          </div>

          <p className="sre-source dpwh-source-margin"><i className="bi bi-info-circle"></i> Source: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer">DPWH Transparency Portal</a></p>
        </div>
      </section>

      <Script src="/assets/js/dpwh-projects.js" strategy="lazyOnload" />
    </>
  );
}
