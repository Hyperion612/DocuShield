export default function AdvancedVerification() {
  const capabilities = [
    {
      title: 'Known Fraud Template Database',
      desc: 'Cross-reference against a repository of 200,000+ identified forgery templates, refreshed daily by our dedicated fraud research team. Includes dark web and template farm monitoring.'
    },
    {
      title: 'Authenticity & Integrity Check',
      desc: 'Compare against a trusted collection of verified invoices gathered since 2003, establishing a solid baseline for identifying fraudulent financial records.'
    },
    {
      title: 'Cross-Field Consistency Analysis',
      desc: 'Deep examination of typefaces and visual elements to spot irregularities that suggest document tampering.'
    },
    {
      title: 'Digital Signature Validation',
      desc: 'Determine whether files were modified post-signature, cross-checking against trusted global roots from Microsoft, Mozilla, Google, Apple, and the eIDAS registry.'
    },
    {
      title: 'Manipulation & Edit Detection',
      desc: 'Comprehensive version tracking that reveals precisely what has been altered in a document, even the most subtle changes.'
    },
    {
      title: 'Deepfake Identification',
      desc: 'State-of-the-art technology to recognize sophisticated deepfake elements embedded within documents, blocking advanced forgery methods.'
    },
    {
      title: 'AI-Generated Content Scanner',
      desc: 'Purpose-built algorithms to identify content produced by AI systems, defending against machine-generated forgeries.'
    },
    {
      title: 'Smart Document Sorting',
      desc: 'Intelligent categorization of documents to optimize verification workflows and apply the right security protocols.'
    }
  ];

  return (
    <section className="gradient-bg py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Advanced Document<br />
            <span className="gradient-text">Verification Technology</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our machine learning models examine documents for forgery indicators, revealing alterations invisible to the naked eye.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1 group-hover:text-indigo-300 transition-colors">{cap.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
