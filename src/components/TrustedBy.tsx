export default function TrustedBy() {
  const companies = [
    'Fortune 500', 'Enterprise', 'Global Banks', 'Insurance', 'Healthcare',
    'Legal Firms', 'Fintech', 'Government', 'Education', 'Retail'
  ];

  return (
    <section className="bg-[#0a0a1a] py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-10">
          Trusted by leading organizations worldwide
        </p>
        
        <div className="overflow-hidden">
          <div className="flex gap-12 marquee">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  </svg>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
