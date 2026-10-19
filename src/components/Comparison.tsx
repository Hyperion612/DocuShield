export default function Comparison() {
  const rows = [
    { feature: 'Advanced AI-driven fraud detection', us: true, them: false },
    { feature: 'Integration with global databases', us: true, them: true },
    { feature: 'Sanction and watchlist screening', us: true, them: true },
    { feature: 'Complex ownership visualization', us: true, them: false },
    { feature: 'Fraudulent business detection', us: true, them: false },
  ];

  return (
    <section className="gradient-bg py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DocuShield vs <span className="text-gray-400">The Rest</span>
          </h2>
          <p className="text-gray-400">See how our platform compares to alternative solutions.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="p-4 md:p-6">
              <span className="text-gray-400 text-sm font-medium">Feature</span>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-white/10">
              <span className="text-white font-bold">DocuShield</span>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-white/10">
              <span className="text-gray-400 font-medium">Others</span>
            </div>
          </div>

          {/* Table Rows */}
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i < rows.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}>
              <div className="p-4 md:p-6">
                <span className="text-gray-300 text-sm">{row.feature}</span>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-white/10">
                {row.us ? (
                  <span className="inline-flex w-6 h-6 bg-green-500/20 rounded-full items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                ) : (
                  <span className="inline-flex w-6 h-6 bg-red-500/20 rounded-full items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="p-4 md:p-6 text-center border-l border-white/10">
                {row.them ? (
                  <span className="inline-flex w-6 h-6 bg-green-500/20 rounded-full items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                ) : (
                  <span className="inline-flex w-6 h-6 bg-red-500/20 rounded-full items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
