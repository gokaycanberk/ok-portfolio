import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="py-12 md:py-20 w-full bg-white">
      <div className="w-full px-6 md:px-10 lg:px-24">
        {/* Portfolio header with view all link */}
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            PORTFOLIO
          </h2>
          <Link
            href="/portfolio"
            className="flex items-center gap-1 md:gap-2 text-base md:text-lg font-medium hover:underline"
          >
            VIEW ALL
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 md:h-5"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Item 1 */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
              <Image
                src="/images/p1.jpg"
                alt="Interior design portfolio"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg md:text-xl font-medium">
                  INTERIOR
                </h3>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
              <Image
                src="/images/p2.jpg"
                alt="Digital design portfolio"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg md:text-xl font-medium">
                  DIGITAL
                </h3>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
              <Image
                src="/images/p3.jpg"
                alt="Art portfolio"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg md:text-xl font-medium">
                  ART
                </h3>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
              <Image
                src="/images/p4.jpg"
                alt="Photography portfolio"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg md:text-xl font-medium">
                  PHOTOGRAPHY
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
