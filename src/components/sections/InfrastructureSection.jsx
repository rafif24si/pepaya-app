export default function InfrastructureSection() {
  return (
    <section className="bg-gradient-to-b from-[#f5f5f5] to-white pt-24 pb-16 px-6 md:px-12" id="infrastructure">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display-lg font-bold text-[#1a1a1a] mb-4 text-center md:text-left">
            Seamless Integration Ecosystem
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cloud Infrastructure Card */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col group">
            <div className="h-72 w-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop" 
                alt="Cloud Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1520690214124-2405c5217036?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-display-lg text-2xl font-bold text-[#1a1a1a] mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-500 leading-relaxed max-w-[400px]">
                  Distributed processing across global nodes for zero-latency sorting.
                </p>
              </div>
            </div>
          </div>

          {/* Edge Deployment Card */}
          <div className="bg-[#1a1a1a] rounded-[32px] overflow-hidden shadow-sm flex flex-col">
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-center bg-[#262626] border-b border-[#333]">
              <div className="font-mono text-sm md:text-base text-gray-300 space-y-2">
                <p><span className="text-green-400">~/papaya-edge</span>$ ./run_inference --model=v4_quantized</p>
                <p className="text-gray-500">Loading model weights...</p>
                <p>Status: <span className="text-green-400">READY</span></p>
                <p>Inference time: <span className="text-orange-400">12ms</span></p>
                <p>Confidence: <span className="text-blue-400">98.2%</span></p>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-display-lg text-2xl font-bold text-white mb-3">Edge Deployment</h3>
                <p className="text-gray-400 leading-relaxed max-w-[400px]">
                  Run inference locally on mobile hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
