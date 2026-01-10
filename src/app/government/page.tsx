'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

export default function GovernmentPage() {
  const {
    lguName,
    labels,
    officials,
    subdivisions,
    getLeaderTitle,
    getViceLeaderTitle,
    getLegislativeBody,
    getLegislativeMembers,
    getSubdivisionTypePlural,
    getDeptPrefix,
    formatPhoneLink,
  } = useSiteConfig();

  // Get executive officials
  const leader = officials.executive.find(o => o.position === 'mayor' || o.position === 'governor');
  const viceLeader = officials.executive.find(o => o.position === 'vice_mayor' || o.position === 'vice_governor');

  // Get legislative members
  const sbMembers = officials.legislative.filter(o => o.position === 'sb_member' || o.position === 'board_member');
  const ligaPresident = officials.legislative.find(o => o.position === 'liga_president');
  const skPresident = officials.legislative.find(o => o.position === 'sk_president');
  const ipmr = officials.legislative.find(o => o.position === 'ipmr');

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-gray-900">Government</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="bi bi-building-fill"></i> Government
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Government Structure &amp; Officials</h1>
            <p className="text-lg text-white/90">Meet the leadership and offices serving {lguName}</p>
          </div>
        </div>
      </section>

      {/* Executive Branch */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-star-fill"></i> Executive Branch
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{labels.lguTypeLabel} Leadership</h2>
            <p className="text-gray-500">The executive officials leading {lguName}&apos;s governance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Leader */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary-500 hover:shadow-lg">
              <div className="bg-primary-600 text-white p-6 text-center">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  {labels.lguTypeLabel} {getLeaderTitle()}
                </span>
                <h3 className="text-xl font-semibold">{leader?.name ? `Hon. ${leader.name}` : 'To be updated'}</h3>
              </div>
              <div className="p-6 space-y-3">
                {leader?.email && (
                  <a href={`mailto:${leader.email}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-envelope text-primary-600"></i> {leader.email}
                  </a>
                )}
                {leader?.phone && (
                  <a href={`tel:${formatPhoneLink(leader.phone)}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-telephone text-primary-600"></i> {leader.phone}
                  </a>
                )}
                <span className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700">
                  <i className="bi bi-clock text-primary-600"></i> Mon-Fri: 8:00 AM - 5:00 PM
                </span>
              </div>
            </div>

            {/* Vice Leader */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary-500 hover:shadow-lg">
              <div className="bg-primary-600 text-white p-6 text-center">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  {labels.lguTypeLabel} {getViceLeaderTitle()}
                </span>
                <h3 className="text-xl font-semibold">{viceLeader?.name ? `Hon. ${viceLeader.name}` : 'To be updated'}</h3>
              </div>
              <div className="p-6 space-y-3">
                {viceLeader?.email && (
                  <a href={`mailto:${viceLeader.email}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-envelope text-primary-600"></i> {viceLeader.email}
                  </a>
                )}
                {viceLeader?.phone && (
                  <a href={`tel:${formatPhoneLink(viceLeader.phone)}`} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <i className="bi bi-telephone text-primary-600"></i> {viceLeader.phone}
                  </a>
                )}
                <span className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-gray-700">
                  <i className="bi bi-clock text-primary-600"></i> Mon-Fri: 8:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legislative Branch */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-people-fill"></i> Legislative Branch
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{getLegislativeBody()} Members</h2>
            <p className="text-gray-500">{getLegislativeMembers()} serving the people of {lguName}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sbMembers.map((member) => (
              <div key={member.id} className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-primary-500 hover:shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{member.name ? `Hon. ${member.name}` : 'To be updated'}</h4>
                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {getLegislativeMembers().replace('s', '')}
                </span>
                {member.committees && <p className="text-sm text-gray-500">{member.committees}</p>}
              </div>
            ))}
            {ligaPresident && (
              <div className="bg-white border border-green-200 rounded-xl p-6 transition-all duration-200 hover:border-green-500 hover:shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{ligaPresident.name ? `Hon. ${ligaPresident.name}` : 'To be updated'}</h4>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {ligaPresident.title}
                </span>
                {ligaPresident.committees && <p className="text-sm text-gray-500">{ligaPresident.committees}</p>}
              </div>
            )}
            {skPresident && (
              <div className="bg-white border border-yellow-200 rounded-xl p-6 transition-all duration-200 hover:border-yellow-500 hover:shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skPresident.name ? `Hon. ${skPresident.name}` : 'To be updated'}</h4>
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {skPresident.title}
                </span>
                {skPresident.committees && <p className="text-sm text-gray-500">{skPresident.committees}</p>}
              </div>
            )}
            {ipmr && (
              <div className="bg-white border border-purple-200 rounded-xl p-6 transition-all duration-200 hover:border-purple-500 hover:shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{ipmr.name ? `Hon. ${ipmr.name}` : 'To be updated'}</h4>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  IPMR
                </span>
                {ipmr.committees && <p className="text-sm text-gray-500">{ipmr.committees}</p>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-building-fill"></i> {getDeptPrefix()} Offices
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Department Heads &amp; Key Offices</h2>
            <p className="text-gray-500">{getDeptPrefix()} offices providing services to citizens</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.departments.map((dept) => (
              <Link
                key={dept.id}
                href={`/service-details/${dept.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 no-underline transition-all duration-200 hover:border-primary-500 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl text-primary-600 text-xl shrink-0 transition-all duration-200 group-hover:bg-primary-600 group-hover:text-white">
                    <i className={`bi ${dept.icon}`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{dept.department}</h4>
                    <p className="text-sm text-gray-500 mb-3">{dept.description}</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      {dept.phone && <span className="flex items-center gap-1"><i className="bi bi-telephone"></i> {dept.phone}</span>}
                      {dept.email && <span className="flex items-center gap-1"><i className="bi bi-envelope"></i> {dept.email}</span>}
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                      View Services <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subdivisions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium mb-3">
              <i className="bi bi-geo-alt-fill"></i> {getSubdivisionTypePlural()}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{getSubdivisionTypePlural()} of {lguName}</h2>
            <p className="text-gray-500">{subdivisions.count} {getSubdivisionTypePlural()} serving our community</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subdivisions.items.map((item) => (
              <a
                key={item.id}
                href={item.phone ? `tel:${formatPhoneLink(item.phone)}` : '#'}
                className="bg-white border border-gray-200 rounded-xl p-4 no-underline transition-all duration-200 hover:border-primary-500 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <i className="bi bi-geo-alt-fill text-primary-600"></i>
                  <span className="font-semibold text-gray-900">{item.name}</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="block">{item.leader}</span>
                  {item.phone && (
                    <span className="flex items-center gap-1 mt-1 text-primary-600">
                      <i className="bi bi-telephone"></i> {item.phone}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
