export default function WhyUs() {
  const advantages = [
    {
      title: 'Superior Fraud Detection',
      desc: 'Stay ahead of threats with AI-powered solutions that catch even the most sophisticated forgeries.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Worldwide Regulatory Compliance',
      desc: 'Effortlessly satisfy legal requirements across 220+ countries and jurisdictions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Flexible & Scalable',
      desc: 'Designed to accommodate businesses of every scale, from emerging startups to global enterprises.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Effortless Integration',
      desc: 'Connect smoothly with your current infrastructure through flexible APIs, SDKs, and pre-built connectors.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Instant Results',
      desc: 'Save valuable time with immediate verifications and clear, actionable insights.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Dedicated Research Lab',
      desc: 'A specialized team continuously studying emerging fraud methods to keep your business protected.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="bg-[#0a0a1a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why DocuShield<br />
            <span className="gradient-text">Leads the Industry</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            An unwavering dedication to protecting your business and preserving customer trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${adv.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{adv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
