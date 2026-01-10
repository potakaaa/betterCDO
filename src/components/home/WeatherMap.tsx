'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function WeatherMap() {
  const [mounted, setMounted] = useState(false);
  const { site, lguName, fullLocation, getHallName } = useSiteConfig();

  const coords: [number, number] = [site.coordinates.lat, site.coordinates.lng];
  const hallName = getHallName();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 m-0">Weather and Map of {lguName}</h2>
        </div>

        {/* Grid: Weather + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-stretch">
          {/* Weather Column */}
          <div className="flex flex-col">
            <div id="weather-container" className="h-full" aria-live="polite">
              {/* Weather Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-start gap-4 pb-4">
                  <i className="bi bi-cloud-sun text-5xl text-primary-600 leading-none opacity-90" />
                  <div className="flex-1">
                    <span className="text-4xl font-bold text-gray-900 leading-none tracking-tight">28°C</span>
                    <p className="text-[0.9375rem] text-gray-800 font-medium mt-1.5 mb-1">Partly Cloudy</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <i className="bi bi-geo-alt text-primary-600 text-[0.6875rem]" />
                      {fullLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div
                id="map-container"
                role="application"
                aria-label={`Interactive map of ${fullLocation}`}
                className="h-[300px] w-full"
              >
                {mounted && (
                  <MapContainer
                    center={coords}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coords}>
                      <Popup>{hallName}</Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
              <p className="text-sm text-gray-500 p-4 m-0 flex items-center gap-1.5">
                <i className="bi bi-geo-alt text-primary-600" aria-hidden="true" /> {hallName}, {fullLocation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
