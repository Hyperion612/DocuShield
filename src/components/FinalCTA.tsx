export default function FinalCTA() {
  return (
    <section id="contact" className="gradient-bg py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join Thousands of Businesses<br />
          That Trust <span className="gradient-text">DocuShield</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Ensure document authenticity across your organization with our AI-powered verification platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg">
            Start Free Trial
          </a>
          <a href="#" className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors text-lg">
            Learn More About DocuShield
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">99.7%</p>
            <p className="text-gray-500 text-sm mt-1">Detection Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">&lt;10s</p>
            <p className="text-gray-500 text-sm mt-1">Average Processing</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">200K+</p>
            <p className="text-gray-500 text-sm mt-1">Fraud Templates</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">220+</p>
            <p className="text-gray-500 text-sm mt-1">Countries Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
