export default function IntegrationCTA() {
  return (
    <section className="bg-[#0a0a1a] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              Get started with our API today and add powerful PDF verification capabilities to your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Contact Sales
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
