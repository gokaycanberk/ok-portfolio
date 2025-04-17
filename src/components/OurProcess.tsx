const OurProcess = () => {
  return (
    <section className="min-h-screen bg-white py-24 w-full border-t border-gray-200">
      <div className="w-full px-10 md:px-16 lg:px-24">
        {/* Process sidebar and header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left sidebar with process steps */}
          <div className="lg:w-2/5">
            <div className="uppercase text-sm tracking-wider mb-12">
              (OUR PROCESS)
            </div>

            <div className="space-y-6">
              <div className="border-t border-gray-300 py-5">
                <div className="text-sm opacity-60 mb-1">(01)</div>
                <div className="text-xl font-normal">Sketch Design</div>
              </div>
              <div className="border-t border-gray-300 py-5">
                <div className="text-sm opacity-60 mb-1">(02)</div>
                <div className="text-xl font-normal">Design Development</div>
              </div>
              <div className="border-t border-gray-300 py-5">
                <div className="text-sm opacity-60 mb-1">(03)</div>
                <div className="text-xl font-normal">
                  Development Application
                </div>
              </div>
              <div className="border-t border-gray-300 py-5">
                <div className="text-sm opacity-60 mb-1">(04)</div>
                <div className="text-xl font-normal">Interior Design</div>
              </div>
              <div className="border-t border-gray-300 py-5">
                <div className="text-sm opacity-60 mb-1">(05)</div>
                <div className="text-xl font-normal">
                  Building approval plans + documentation
                </div>
              </div>
              <div className="border-t border-gray-300 py-5">
                <div className="text-sm opacity-60 mb-1">(06)</div>
                <div className="text-xl font-normal">
                  Construction plans + documentation
                </div>
              </div>
            </div>
          </div>

          {/* Right content area */}
          <div className="lg:w-3/5">
            <h2 className="text-5xl font-light mb-16 leading-tight">
              Our approach is designed to make your journey from concept to
              completion as smooth and enjoyable as possible.
            </h2>

            <p className="text-lg mb-8">
              With our 6-stages plan, we prioritize clarity, collaboration, and
              your unique vision. Each stage is crafted to keep you informed,
              inspired, and involved.
            </p>

            <div className="mt-12">
              <a
                href="/process"
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors rounded-full"
              >
                GET TO KNOW OUR PROCESS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
