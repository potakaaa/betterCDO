'use client';

import { useState, useMemo } from 'react';

// Sample DPWH projects data - replace with actual data from your LGU
// Data can be sourced from DPWH Transparency Portal (transparency.dpwh.gov.ph)
const dpwhData = {
    summary: {
        totalProjects: 0,
        totalCost: 0,
        completedProjects: 0,
        ongoingProjects: 0,
    },
    projects: [
        { id: 'SAMPLE-001', name: 'Sample Road Improvement Project', location: 'Sample Location', category: 'Roads', contractor: 'Sample Contractor', cost: 0, status: 100, date: '2024-01-01' },
        { id: 'SAMPLE-002', name: 'Sample Flood Control Project', location: 'Sample Location', category: 'Flood Control and Drainage', contractor: 'Sample Contractor', cost: 0, status: 100, date: '2024-02-01' },
        { id: 'SAMPLE-003', name: 'Sample Building Construction', location: 'Sample Location', category: 'Buildings', contractor: 'Sample Contractor', cost: 0, status: 50, date: null },
    ],
};

type FilterType = 'all' | 'buildings' | 'roads' | 'flood' | 'water';

export function DPWHProjectsTable() {
    const [filter, setFilter] = useState<FilterType>('all');
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = useMemo(() => {
        if (filter === 'all') return dpwhData.projects;
        return dpwhData.projects.filter(p => {
            if (filter === 'buildings') return p.category.includes('Buildings');
            if (filter === 'roads') return p.category.includes('Roads');
            if (filter === 'flood') return p.category.includes('Flood');
            if (filter === 'water') return p.category.includes('Water');
            return true;
        });
    }, [filter]);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

    const counts = {
        all: dpwhData.projects.length,
        buildings: dpwhData.projects.filter(p => p.category.includes('Buildings')).length,
        roads: dpwhData.projects.filter(p => p.category.includes('Roads')).length,
        flood: dpwhData.projects.filter(p => p.category.includes('Flood')).length,
        water: dpwhData.projects.filter(p => p.category.includes('Water')).length,
    };

    const formatCurrency = (amount: number) =>
        '₱' + amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return '—';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const getCategoryClass = (category: string) => {
        if (category.includes('Flood')) return 'flood';
        if (category.includes('Roads')) return 'roads';
        if (category.includes('Water')) return 'water';
        return 'buildings';
    };

    const getCategoryLabel = (category: string) => {
        if (category.includes('Flood')) return 'Flood Control';
        if (category.includes('Roads')) return 'Roads';
        if (category.includes('Water')) return 'Water';
        return 'Buildings';
    };

    return (
        <div className="dpwh-section">
            {/* Summary Bar */}
            <div className="dpwh-summary-bar">
                <div className="dpwh-summary-item">
                    <span className="dpwh-summary-value">{dpwhData.summary.totalProjects || dpwhData.projects.length}</span>
                    <span className="dpwh-summary-label">Projects</span>
                </div>
                <div className="dpwh-summary-item">
                    <span className="dpwh-summary-value">₱{((dpwhData.summary.totalCost || dpwhData.projects.reduce((sum, p) => sum + p.cost, 0)) / 1000000).toFixed(1)}M</span>
                    <span className="dpwh-summary-label">Total Investment</span>
                </div>
                <div className="dpwh-summary-item">
                    <span className="dpwh-summary-value">{dpwhData.summary.completedProjects || dpwhData.projects.filter(p => p.status === 100).length}</span>
                    <span className="dpwh-summary-label">Completed</span>
                </div>
                <div className="dpwh-summary-item">
                    <span className="dpwh-summary-value">{dpwhData.summary.ongoingProjects || dpwhData.projects.filter(p => p.status < 100).length}</span>
                    <span className="dpwh-summary-label">Ongoing</span>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="dpwh-controls">
                <div className="dpwh-filter-group" role="tablist">
                    {(['all', 'buildings', 'roads', 'flood', 'water'] as FilterType[]).map((f) => (
                        <button
                            key={f}
                            className={`dpwh-tab ${filter === f ? 'active' : ''}`}
                            onClick={() => { setFilter(f); setShowAll(false); }}
                            role="tab"
                            aria-selected={filter === f}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                            <span className="dpwh-tab-count">{counts[f]}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Table */}
            <div className="dpwh-table-wrap">
                <table className="dpwh-table" role="table">
                    <thead>
                        <tr>
                            <th scope="col" className="col-desc">Contract Description</th>
                            <th scope="col" className="col-contractor">Contractor</th>
                            <th scope="col" className="col-cost">Cost</th>
                            <th scope="col" className="col-status">Status</th>
                            <th scope="col" className="col-date">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedProjects.map((p) => (
                            <tr key={p.id} className="dpwh-row">
                                <td className="col-desc">
                                    <div className="dpwh-desc-wrap">
                                        <span className="dpwh-proj-id">{p.id}</span>
                                        <span className={`dpwh-cat-badge ${getCategoryClass(p.category)}`}>
                                            {getCategoryLabel(p.category)}
                                        </span>
                                    </div>
                                    <span className="dpwh-proj-title">{p.name}</span>
                                    <span className="dpwh-proj-location">
                                        <i className="bi bi-geo-alt"></i> {p.location}
                                    </span>
                                </td>
                                <td className="col-contractor">
                                    <span className="dpwh-contractor">{p.contractor}</span>
                                </td>
                                <td className="col-cost">{formatCurrency(p.cost)}</td>
                                <td className="col-status">
                                    {p.status === 100 ? (
                                        <span className="dpwh-badge complete">Completed</span>
                                    ) : (
                                        <span className="dpwh-badge ongoing">{p.status.toFixed(0)}%</span>
                                    )}
                                </td>
                                <td className="col-date">{formatDate(p.date)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Load More */}
            {filteredProjects.length > 8 && !showAll && (
                <div className="dpwh-load-more">
                    <button className="dpwh-load-btn" onClick={() => setShowAll(true)}>
                        Load More <span className="dpwh-remaining">({filteredProjects.length - 8} remaining)</span>
                    </button>
                </div>
            )}
            {showAll && (
                <div className="dpwh-load-more">
                    <span className="dpwh-end-msg">Showing all {filteredProjects.length} projects</span>
                </div>
            )}

            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', fontSize: '0.9rem', marginTop: 'var(--spacing-md)' }}>
                <i className="bi bi-info-circle"></i> Sample data — replace with actual DPWH projects from your LGU via public/data/dpwh-projects.json
            </p>
        </div>
    );
}
