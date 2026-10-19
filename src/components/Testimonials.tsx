export default function Testimonials() {
  const testimonials = [
    {
      quote: "DocuShield protected our firm from a serious fraud attempt. We scanned a critical contract and uncovered that it had been tampered with. The detailed analysis helped us pinpoint exactly what was modified.",
      name: 'Sarah Johnson',
      role: 'Legal Consultant, Legix Inc.',
      initials: 'SJ'
    },
    {
      quote: "As a real estate professional, I need rapid document verification. DocuShield's AI is remarkably fast and precise. It flagged problems in a property deed that could have caused significant issues at closing.",
      name: 'Michael Rivera',
      role: 'Real Estate Broker, HomeQuest Realty',
      initials: 'MR'
    },
    {
      quote: "The enterprise solution has transformed our HR operations. We handle hundreds of employment documents each week, and DocuShield's batch processing saves us enormous time while maintaining full compliance.",
      name: 'Emily Chen',
      role: 'HR Director, TechGrowth Solutions',
      initials: 'EC'
    }
  ];

  return (
    <section id="testimonials" className="bg-[#0a0a1a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by Businesses<br />
            <span className="gradient-text">Around the Globe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from organizations that depend on DocuShield to validate their critical documents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
