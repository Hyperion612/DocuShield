export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Upload Your File',
      desc: 'Drag and drop your PDF or image, or select it from your device. You can also connect via API, Dropbox, Google Drive, Amazon S3, or Microsoft OneDrive for seamless integration.'
    },
    {
      num: '02',
      title: 'Instant Analysis',
      desc: 'Our platform immediately scans the document using advanced AI to identify potential fraud. It reviews metadata, text patterns, embedded signatures, and signs of manipulation.'
    },
    {
      num: '03',
      title: 'Receive Your Report',
      desc: 'Get a comprehensive authenticity report — directly in your dashboard or through webhooks. See exactly what was analyzed and the reasoning behind each finding, with complete transparency.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#0a0a1a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            Verify Documents in<br />
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our secure, AI-driven platform makes document verification quick and effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                <span className="text-5xl font-bold text-indigo-500/30">{step.num}</span>
                <h3 className="text-white text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-indigo-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
