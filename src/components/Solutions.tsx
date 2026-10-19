import { useState } from 'react';

export default function Solutions() {
  const industries = [
    { name: 'Financial Technology', icon: '📊' },
    { name: 'Transportation & Car Sharing', icon: '🚗' },
    { name: 'Law Firms & Notaries', icon: '⚖️' },
    { name: 'Cryptocurrency', icon: '💎' },
    { name: 'iGaming', icon: '🎲' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'HR Management', icon: '👥' },
  ];

  const [active, setActive] = useState(0);

  const descriptions: Record<number, string> = {
    0: 'Protect financial transactions and ensure compliance with KYC/AML regulations through real-time document verification.',
    1: 'Verify driver licenses, insurance documents, and vehicle registrations instantly for seamless onboarding.',
    2: 'Authenticate legal documents, contracts, and notarized papers with enterprise-grade precision.',
    3: 'Safeguard crypto platforms from identity fraud with advanced document analysis and deepfake detection.',
    4: 'Ensure player identity verification meets regulatory requirements across multiple jurisdictions.',
    5: 'Verify medical records, prescriptions, and insurance claims with HIPAA-compliant document analysis.',
    6: 'Streamline employee onboarding by instantly verifying employment documents, certifications, and IDs.',
  };

  return (
    <section id="solutions" className="gradient-bg py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Solutions That Build<br />
            <span className="gradient-text">Confidence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tailored document verification for every industry and use case.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{ind.icon}</span>
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <div className="text-5xl mb-4">{industries[active].icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{industries[active].name}</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">{descriptions[active]}</p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Learn More
          </a>
        </div>

        {/* Add-on Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Services</h3>
          <p className="text-gray-400 text-center mb-8">Enhance your verification with these add-on services available for all plans</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-1">Advanced Deepfake Detection</h4>
              <p className="text-indigo-400 font-bold">+$0.25 /Check</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-1">AI-Generated Content Analysis</h4>
              <p className="text-purple-400 font-bold">+$0.25 /Check</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-white font-medium mb-1">Automated Document Classification</h4>
              <p className="text-pink-400 font-bold">+$0.10 /Check</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
