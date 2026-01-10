'use client';

import Link from 'next/link';
import {
  PopulationTrendsChart,
  PopulationDistributionChart,
  BarangayPopulationChart,
  KeyIndicatorsTrendChart
} from '@/components/charts/Charts';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function StatisticsPage() {
  const { statistics, labels, lguName, fullLocation } = useSiteConfig();

  const barangayData = [
    { rank: 1, name: 'Roxas', pop: 9088, pct: 100 },
    { rank: 2, name: 'Quirino', pop: 6572, pct: 72 },
    { rank: 3, name: 'Osmeña', pop: 6403, pct: 70 },
    { rank: 4, name: 'Quezon', pop: 5758, pct: 63 },
    { rank: 5, name: 'Curifang', pop: 4885, pct: 54 },
    { rank: 6, name: 'Bagahabag', pop: 4731, pct: 52 },
    { rank: 7, name: 'Uddiawan', pop: 4217, pct: 46 },
    { rank: 8, name: 'Bascaran', pop: 3845, pct: 42 },
    { rank: 9, name: 'Aggub', pop: 3101, pct: 34 },
    { rank: 10, name: 'San Luis', pop: 2668, pct: 29 },
  ];

  const allBarangays = [
    ...barangayData,
    { rank: 11, name: 'Communal', pop: 2586, pct: 28 },
    { rank: 12, name: 'Lactawan', pop: 2109, pct: 23 },
    { rank: 13, name: 'San Juan', pop: 1965, pct: 22 },
    { rank: 14, name: 'Concepcion', pop: 1954, pct: 21 },
    { rank: 15, name: 'Dadap', pop: 1409, pct: 15 },
    { rank: 16, name: 'Wacal', pop: 1398, pct: 15 },
    { rank: 17, name: 'Bangaan', pop: 1284, pct: 14 },
    { rank: 18, name: 'Tucal', pop: 1244, pct: 14 },
    { rank: 19, name: 'Bangar', pop: 1146, pct: 13 },
    { rank: 20, name: 'Pilar D. Galima', pop: 1146, pct: 13 },
    { rank: 21, name: 'Poblacion North', pop: 970, pct: 11 },
    { rank: 22, name: 'Poblacion South', pop: 817, pct: 9 },
  ];

  const cmciPillars = [
    { icon: 'bi-graph-up-arrow', title: 'Economic Dynamism', score: '0.23', trend: '+12%', trendType: 'up' },
    { icon: 'bi-building-check', title: 'Government Efficiency', score: '1.17', trend: '-8%', trendType: 'down' },
    { icon: 'bi-building-gear', title: 'Infrastructure', score: '0.40', trend: '+5%', trendType: 'up' },
    { icon: 'bi-shield-check', title: 'Resiliency', score: '1.08', trend: 'Stable', trendType: 'stable' },
    { icon: 'bi-lightbulb', title: 'Innovation', score: '0.68', trend: '+25%', trendType: 'up' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Statistics</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-bar-chart-fill"></i> {labels.lguTypeLabel} Data
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{labels.lguTypeLabel} Statistics</h1>
            <p className="text-lg text-white/90">Data and statistics about {fullLocation}</p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:border-primary-500">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-xl text-2xl mb-4">
                <i className="bi bi-people-fill"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {statistics.population.count > 0 ? statistics.population.count.toLocaleString() : '—'}
              </div>
              <div className="text-gray-500 font-medium">Population</div>
              <div className="text-xs text-gray-400 mt-2">{statistics.population.year} {statistics.population.source}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:border-primary-500">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-xl text-2xl mb-4">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {statistics.subdivisions.count > 0 ? statistics.subdivisions.count : '—'}
              </div>
              <div className="text-gray-500 font-medium">{labels.subdivisionTypePlural}</div>
              <div className="text-xs text-gray-400 mt-2">{statistics.subdivisions.source}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:border-primary-500">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-xl text-2xl mb-4">
                <i className="bi bi-rulers"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {statistics.landArea.value > 0 ? statistics.landArea.value : '—'}
              </div>
              <div className="text-gray-500 font-medium">Land Area ({statistics.landArea.unit})</div>
              <div className="text-xs text-gray-400 mt-2">{statistics.landArea.source}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:border-primary-500">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-xl text-2xl mb-4">
                <i className="bi bi-award-fill"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {statistics.incomeClass.class || '—'}
              </div>
              <div className="text-gray-500 font-medium">Income Class</div>
              <div className="text-xs text-gray-400 mt-2">{statistics.incomeClass.source}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Finance */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-cash-stack"></i> Finance
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Municipal Income</h2>
            <p className="text-gray-500">Financial standing for fiscal year 2023</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4 opacity-80">
                <i className="bi bi-graph-up-arrow"></i>
                <span>Annual Income</span>
              </div>
              <div className="text-3xl font-bold mb-1">₱371.33M</div>
              <div className="text-sm opacity-75">₱371,329,918.71</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <i className="bi bi-bank"></i>
                <span>IRA Share</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">₱220.77M</div>
              <div className="text-sm text-gray-500">Internal Revenue Allotment</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <i className="bi bi-pie-chart-fill"></i>
                <span>IRA Dependency</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">59.45%</div>
              <div className="text-sm text-gray-500">National Tax Share</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">Income Composition</h4>
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden flex">
              <div className="bg-primary-600 h-full flex items-center justify-center text-white text-xs font-medium" style={{ width: '59.45%' }}>
                IRA 59.45%
              </div>
              <div className="bg-green-500 h-full flex items-center justify-center text-white text-xs font-medium" style={{ width: '40.55%' }}>
                Local 40.55%
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 bg-primary-600 rounded-full"></span>
                Internal Revenue Allotment
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Local Sources
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bureau of Local Government Finance (BLGF)</a> – 2023 SRE Data
          </p>
        </div>
      </section>

      {/* Population Trends */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-graph-up"></i> Growth
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Population Trends</h2>
            <p className="text-gray-500">Historical growth from 1990 to 2024</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
              <span className="text-sm text-gray-500">1990</span>
              <span className="block text-2xl font-bold text-gray-900">38,006</span>
            </div>
            <div className="flex items-center">
              <i className="bi bi-arrow-right text-2xl text-gray-400"></i>
            </div>
            <div className="text-center p-4 bg-primary-50 border border-primary-200 rounded-xl">
              <span className="text-sm text-primary-600">2024</span>
              <span className="block text-2xl font-bold text-primary-700">69,296</span>
            </div>
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
              <span className="text-sm text-green-600">Growth</span>
              <span className="block text-2xl font-bold text-green-700">+82.3%</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <PopulationTrendsChart />
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Philippine Statistics Authority (PSA)</a>
          </p>
        </div>
      </section>

      {/* Population Distribution */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-pie-chart-fill"></i> Distribution
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Population by Barangay</h2>
            <p className="text-gray-500">2024 Census of Population</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <PopulationDistributionChart />
            </div>
            <div className="space-y-3">
              {barangayData.map((b) => (
                <div key={b.rank} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${b.rank <= 3 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    #{b.rank}
                  </span>
                  <span className="font-medium text-gray-900 w-32">{b.name}</span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: `${b.pct}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 w-16 text-right">{b.pop.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <details className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            <summary className="p-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 flex items-center gap-2">
              <i className="bi bi-chevron-down"></i> View all 22 barangays
            </summary>
            <div className="p-4 border-t border-gray-200 space-y-3">
              {allBarangays.slice(10).map((b) => (
                <div key={b.rank} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold bg-gray-100 text-gray-600">
                    #{b.rank}
                  </span>
                  <span className="font-medium text-gray-900 w-32">{b.name}</span>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-400 rounded-full" style={{ width: `${b.pct}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 w-16 text-right">{b.pop.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </details>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Philippine Statistics Authority (PSA)</a> - 2024 Census
          </p>
        </div>
      </section>

      {/* Economic Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-briefcase-fill"></i> Economy
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Economic Indicators</h2>
            <p className="text-gray-500">Key economic data and business statistics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl text-2xl shrink-0">
                <i className="bi bi-shop"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1,200</div>
                <div className="text-gray-500">Registered Businesses</div>
                <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                  <i className="bi bi-arrow-up"></i> +8% from last year
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 rounded-xl text-2xl shrink-0">
                <i className="bi bi-tree-fill"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">8,500 ha</div>
                <div className="text-gray-500">Agricultural Land</div>
                <div className="text-sm text-gray-500 mt-1">Rice & Corn Production</div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-50 text-purple-600 rounded-xl text-2xl shrink-0">
                <i className="bi bi-person-check-fill"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">94.2%</div>
                <div className="text-gray-500">Employment Rate</div>
                <div className="text-sm text-gray-500 mt-1">Labor Force Participation</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">Economic Sectors</h4>
            <div className="space-y-4">
              {[
                { name: 'Agriculture', pct: 45 },
                { name: 'Trade & Commerce', pct: 30 },
                { name: 'Services', pct: 20 },
                { name: 'Industry', pct: 5 },
              ].map((sector) => (
                <div key={sector.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{sector.name}</span>
                    <span className="text-sm font-bold text-gray-900">{sector.pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full transition-all" style={{ width: `${sector.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bureau of Local Government Finance (BLGF)</a> - 2023
          </p>
        </div>
      </section>

      {/* Poverty Statistics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-graph-down-arrow"></i> Poverty
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Poverty Statistics</h2>
            <p className="text-gray-500">2021 City and Municipal Level Poverty Estimates</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl w-48">
              <span className="text-sm text-gray-500">2018</span>
              <div className="text-4xl font-bold text-gray-900 my-2">7.0<span className="text-lg">%</span></div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{ width: '7%' }}></div>
              </div>
              <span className="text-xs text-gray-400 mt-2 block">90% CI: 4.7% - 9.2%</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="bi bi-arrow-right text-2xl text-gray-400"></i>
              <span className="text-sm font-medium text-green-600">-0.6%</span>
            </div>
            <div className="text-center p-6 bg-green-50 border border-green-200 rounded-xl w-48">
              <span className="text-sm text-green-600">2021</span>
              <div className="text-4xl font-bold text-green-700 my-2">6.4<span className="text-lg">%</span></div>
              <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '6.4%' }}></div>
              </div>
              <span className="text-xs text-green-600 mt-2 flex items-center justify-center gap-1">
                <i className="bi bi-check-circle-fill"></i> Improved
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Philippine Statistics Authority (PSA)</a> - 2021 Poverty Estimates
          </p>
        </div>
      </section>

      {/* Competitive Index */}
      <section className="py-12 bg-gray-50" id="competitive-index">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-trophy-fill"></i> Competitiveness
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{lguName} Competitive Index</h2>
            <p className="text-gray-500">Cities and Municipalities Competitiveness Index (CMCI) Performance</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {cmciPillars.map((pillar, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-600 rounded-xl text-xl mx-auto mb-3">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">{pillar.title}</h4>
                <div className="text-2xl font-bold text-gray-900 mb-1">{pillar.score}</div>
                <div className={`text-sm font-medium flex items-center justify-center gap-1 ${
                  pillar.trendType === 'up' ? 'text-green-600' :
                  pillar.trendType === 'down' ? 'text-red-600' : 'text-gray-500'
                }`}>
                  <i className={`bi ${
                    pillar.trendType === 'up' ? 'bi-arrow-up' :
                    pillar.trendType === 'down' ? 'bi-arrow-down' : 'bi-dash'
                  }`}></i>
                  {pillar.trend}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <i className="bi bi-bar-chart-line"></i> Key Indicators Trend (2016-2024)
            </h4>
            <KeyIndicatorsTrendChart />
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DTI Cities and Municipalities Competitiveness Index (CMCI)</a>
          </p>
        </div>
      </section>

      {/* Bar Chart Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-bar-chart-fill"></i> Visual
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Population Bar Chart</h2>
            <p className="text-gray-500">Comparative view of all 22 barangays</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <BarangayPopulationChart />
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <i className="bi bi-info-circle"></i>
            Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Philippine Statistics Authority (PSA)</a> - 2024 Census
          </p>
        </div>
      </section>
    </>
  );
}
