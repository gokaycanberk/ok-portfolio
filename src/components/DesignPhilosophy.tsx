import Image from "next/image";

const DesignPhilosophy = () => {
  return (
    <section
      id="scrollthis"
      className="md:min-h-screen bg-white pt-12 md:pt-16 pb-16 md:pb-32 w-full"
    >
      <div className="w-full">
        {/* First row - DESIGNING HOMES WITH */}
        <div className="w-full mb-0 px-6 md:px-10 lg:px-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-none">
            DESIGNING
            <br />
            HOMES WITH
          </h2>
        </div>

        {/* Second row - Photo and PEOPLE AT HEART */}
        <div className="w-full px-0 mt-0">
          <div className="flex flex-col md:flex-row md:justify-end px-6 md:px-10 lg:pr-24 lg:pl-[calc(320px-24px)]">
            <div className="flex items-start flex-col md:flex-row">
              <div className="w-full md:w-[450px] h-[250px] md:h-[320px] relative mt-6 md:mt-0">
                <Image
                  src="/images/img1.png"
                  alt="Architecture design"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="object-center"
                />
              </div>
              <div className="ml-0 md:ml-4 mt-4 md:mt-0">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-none">
                  PEOPLE
                  <br />
                  AT HEART
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Third row - Text section - full width with same left spacing */}
        <div className="w-full mt-12 md:mt-20 px-6 md:px-10 lg:px-24">
          <p className="text-base md:text-lg mb-6 md:mb-10 text-left md:text-center font-normal">
            We design spaces for people. No matter the scale of the projects,
            our down-to-earth approach stays the same. We listen first, design
            second. We take the time to understand how you live, work, and move
            through your space.
          </p>
          <p className="text-base md:text-lg mb-10 md:mb-16 text-left md:text-center font-normal">
            Then, we bring your vision to life. Drawing from real experience, we
            create contemporary, aspirational spaces that feel effortless and
            truly yours.
          </p>
          <div className="mt-8 md:mt-12 text-left md:text-center">
            <a
              href="/studio"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors rounded-full"
            >
              LEARN MORE ABOUT OUR STUDIO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
