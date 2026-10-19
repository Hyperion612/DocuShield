import { useState } from 'react';

export default function Hero() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <section className="gradient-bg pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300 text-sm">AI-Powered Document Verification</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Detect Document Fraud<br />
            <span className="gradient-text">Before It's Too Late</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Instantly identify manipulated, forged, or AI-generated PDF and image documents using cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#upload" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Verify Now
            </a>
            <a href="#contact" className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Upload Area */}
        <div id="upload" className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 card-glow">
            <h3 className="text-white text-lg font-semibold mb-2 text-center">Document Checker</h3>
            <p className="text-gray-400 text-sm text-center mb-6">Upload your PDF or image to verify its authenticity</p>
            
            <div
              className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors cursor-pointer ${
                dragOver ? 'border-indigo-400 bg-indigo-500/10' : 'border-white/20 hover:border-white/40'
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <input
                id="file-input"
                type="file"
                className="hidden"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileInput}
              />
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                {fileName ? (
                  <p className="text-white font-medium">{fileName}</p>
                ) : (
                  <>
                    <p className="text-gray-300 font-medium">Drag & drop your file here</p>
                    <p className="text-gray-500 text-sm">Supports PDF, PNG, JPG, JPEG (up to 25MB)</p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1 accent-indigo-500" />
              <label htmlFor="terms" className="text-gray-400 text-xs">
                I agree to the <a href="#" className="text-indigo-400 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
              Verify Document
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
