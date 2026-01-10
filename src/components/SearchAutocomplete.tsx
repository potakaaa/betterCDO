'use client';

import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearch, highlightMatch } from '@/hooks/useSearch';

interface SearchAutocompleteProps {
  placeholder?: string;
  className?: string;
  onResultClick?: () => void;
}

export default function SearchAutocomplete({
  placeholder = "Search services (e.g., birth certificate, business permit)",
  className = "",
  onResultClick
}: SearchAutocompleteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    results,
    suggestions,
    isOpen,
    setIsOpen,
    selectedIndex,
    handleKeyDown,
    handleSuggestionClick,
    clearRecentSearches,
    addRecentSearch
  } = useSearch();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setIsOpen]);

  const handleResultClick = (url: string) => {
    addRecentSearch(query);
    setIsOpen(false);
    onResultClick?.();
    router.push(url.startsWith('/') ? url : `/${url}`);
  };

  const handleSuggestion = (suggestion: string) => {
    handleSuggestionClick(suggestion);
  };

  const showDropdown = isOpen && (
    results.length > 0 ||
    suggestions.suggestions.length > 0 ||
    suggestions.recent.length > 0 ||
    suggestions.popular.length > 0
  );

  return (
    <div className={`relative w-full flex-1 ${className}`}>
      <input
        ref={inputRef}
        type="search"
        className="w-full px-5 py-4 pl-12 border-2 border-transparent rounded-full text-base bg-white shadow-lg transition-all duration-200 focus:outline-none focus:border-blue-700 focus:shadow-xl placeholder:text-gray-400"
        placeholder={placeholder}
        aria-label="Search services"
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-white border border-blue-100 rounded-2xl shadow-2xl max-h-[480px] overflow-y-auto z-50 mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
          aria-label="Search suggestions"
        >
          {/* Category Filter Tabs */}
          <div className="flex gap-1.5 px-3 py-3 pb-2.5 border-b border-blue-50 flex-nowrap justify-start bg-gradient-to-b from-gray-50 to-white rounded-t-2xl overflow-x-auto">
            <button
              type="button"
              className="px-3 py-1.5 border-2 border-blue-700 rounded-full bg-blue-700 text-xs font-medium text-white cursor-pointer whitespace-nowrap flex-shrink-0 shadow-md"
              data-category=""
            >
              All
            </button>
            <button
              type="button"
              className="px-3 py-1.5 border-2 border-blue-200 rounded-full bg-white text-xs font-medium text-gray-600 cursor-pointer whitespace-nowrap flex-shrink-0 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              data-category="certificates"
            >
              Certificates
            </button>
            <button
              type="button"
              className="px-3 py-1.5 border-2 border-blue-200 rounded-full bg-white text-xs font-medium text-gray-600 cursor-pointer whitespace-nowrap flex-shrink-0 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              data-category="business"
            >
              Business
            </button>
            <button
              type="button"
              className="px-3 py-1.5 border-2 border-blue-200 rounded-full bg-white text-xs font-medium text-gray-600 cursor-pointer whitespace-nowrap flex-shrink-0 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              data-category="social"
            >
              Social
            </button>
            <button
              type="button"
              className="px-3 py-1.5 border-2 border-blue-200 rounded-full bg-white text-xs font-medium text-gray-600 cursor-pointer whitespace-nowrap flex-shrink-0 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              data-category="health"
            >
              Health
            </button>
            <button
              type="button"
              className="px-3 py-1.5 border-2 border-blue-200 rounded-full bg-white text-xs font-medium text-gray-600 cursor-pointer whitespace-nowrap flex-shrink-0 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
              data-category="taxation"
            >
              Taxation
            </button>
          </div>

          {/* Recent Searches */}
          {query.length < 2 && suggestions.recent.length > 0 && (
            <div className="border-b border-blue-50 last:border-b-0">
              <div className="flex justify-between items-center px-4 pt-3 pb-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-clock-history text-blue-700"></i>
                  Recent Searches
                </span>
                <button
                  className="bg-transparent border-none text-blue-700 text-[11px] font-medium cursor-pointer px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                  type="button"
                  onClick={() => {
                    clearRecentSearches();
                    setIsOpen(false);
                  }}
                >
                  Clear
                </button>
              </div>
              {suggestions.recent.map((term, idx) => (
                <button
                  key={`recent-${idx}`}
                  className={`flex items-center w-full py-3 px-4 text-sm text-gray-700 text-left border-none bg-transparent border-l-[3px] border-l-transparent cursor-pointer transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:border-l-blue-700 hover:text-blue-700 ${selectedIndex === idx ? 'bg-gradient-to-r from-blue-50 to-transparent border-l-blue-700 text-blue-700' : ''}`}
                  onClick={() => handleSuggestion(term)}
                  type="button"
                >
                  <i className="bi bi-arrow-counterclockwise text-gray-400 mr-2.5 text-sm"></i>
                  {term}
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {query.length < 2 && suggestions.popular.length > 0 && (
            <div className="border-b border-blue-50 last:border-b-0">
              <div className="flex justify-between items-center px-4 pt-3 pb-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-fire text-blue-700"></i>
                  Popular Searches
                </span>
              </div>
              {suggestions.popular.map((term, idx) => (
                <button
                  key={`popular-${idx}`}
                  className={`flex items-center w-full py-3 px-4 text-sm text-gray-700 text-left border-none bg-transparent border-l-[3px] border-l-transparent cursor-pointer transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:border-l-blue-700 hover:text-blue-700 ${selectedIndex === suggestions.recent.length + idx ? 'bg-gradient-to-r from-blue-50 to-transparent border-l-blue-700 text-blue-700' : ''}`}
                  onClick={() => handleSuggestion(term)}
                  type="button"
                >
                  <i className="bi bi-search text-gray-400 mr-2.5 text-sm"></i>
                  {term}
                </button>
              ))}
            </div>
          )}

          {/* Autocomplete Suggestions */}
          {query.length >= 2 && suggestions.suggestions.length > 0 && results.length === 0 && (
            <div className="border-b border-blue-50 last:border-b-0">
              <div className="flex justify-between items-center px-4 pt-3 pb-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-lightbulb text-blue-700"></i>
                  Did you mean?
                </span>
              </div>
              {suggestions.suggestions.slice(0, 5).map((term, idx) => (
                <button
                  key={`suggestion-${idx}`}
                  className={`flex items-center w-full py-3 px-4 text-sm text-gray-700 text-left border-none bg-transparent border-l-[3px] border-l-transparent cursor-pointer transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:border-l-blue-700 hover:text-blue-700 ${selectedIndex === idx ? 'bg-gradient-to-r from-blue-50 to-transparent border-l-blue-700 text-blue-700' : ''}`}
                  onClick={() => handleSuggestion(term)}
                  type="button"
                >
                  <i className="bi bi-search text-gray-400 mr-2.5 text-sm"></i>
                  {term}
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.length >= 2 && results.length === 0 && suggestions.suggestions.length === 0 && (
            <div className="py-8 px-6 text-center text-gray-500">
              <i className="bi bi-search text-4xl text-blue-200 mb-3 block"></i>
              <p className="m-0 mb-1.5 font-semibold text-gray-700">No services found</p>
              <small className="text-gray-400 text-sm">Try different keywords or check spelling</small>
            </div>
          )}

          {/* Search Results */}
          {results.map((result, index) => (
            <button
              key={result.id}
              className={`block w-full py-3.5 px-4 text-gray-900 border-b border-blue-50 last:border-b-0 text-left border-l-[3px] border-l-transparent bg-transparent cursor-pointer transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:border-l-blue-700 ${selectedIndex === index ? 'bg-gradient-to-r from-blue-50 to-transparent border-l-blue-700' : ''}`}
              onClick={() => handleResultClick(result.url)}
              type="button"
            >
              <div className="font-semibold text-blue-700 mb-1.5 text-[15px] flex items-center gap-2">
                <span dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, query) }} />
                {result.processingTime?.toLowerCase().includes('same day') && (
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-600 uppercase tracking-wide">
                    Fast
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-xs mb-1.5">
                <span className="inline-flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  <i className="bi bi-folder text-[11px] opacity-80"></i>
                  {result.category}
                </span>
                {result.fee && (
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                    <i className="bi bi-cash text-[11px] opacity-80"></i>
                    {result.fee}
                  </span>
                )}
                {result.processingTime && (
                  <span className="inline-flex items-center gap-1 text-blue-600">
                    <i className="bi bi-clock text-[11px] opacity-80"></i>
                    {result.processingTime}
                  </span>
                )}
              </div>
              {result.office && (
                <div className="text-xs text-gray-500 mb-1 flex items-center">
                  <i className="bi bi-building mr-1.5 text-[11px] text-blue-700"></i>
                  {result.office}
                </div>
              )}
              {result.description && (
                <div className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis leading-relaxed">
                  {result.description}
                </div>
              )}
            </button>
          ))}

          {/* Footer */}
          {results.length > 0 && (
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-t border-blue-50 text-xs text-gray-400 rounded-b-2xl">
              <span className="font-medium">
                {results.length} service{results.length !== 1 ? 's' : ''} found
              </span>
              <span className="hidden sm:flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-white border border-gray-300 rounded text-[10px] font-semibold text-gray-600 shadow-sm">↑</kbd>
                  <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-white border border-gray-300 rounded text-[10px] font-semibold text-gray-600 shadow-sm">↓</kbd>
                  <span className="ml-1">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-white border border-gray-300 rounded text-[10px] font-semibold text-gray-600 shadow-sm">Enter</kbd>
                  <span className="ml-1">Select</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-white border border-gray-300 rounded text-[10px] font-semibold text-gray-600 shadow-sm">Esc</kbd>
                  <span className="ml-1">Close</span>
                </span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
