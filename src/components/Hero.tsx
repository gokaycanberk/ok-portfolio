import AnimatedBox from "./AnimatedBox";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-12 md:px-16 lg:px-24 mb-20">
        <div className="text-7xl font-light mb-12 md:mb-0">Ozge Kantar</div>
        <div className="hidden md:flex justify-center items-center">
          <AnimatedBox />
        </div>
      </div>

      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
        <div className="uppercase text-xs tracking-widest text-gray-400">
          Scroll
        </div>
      </div>
    </div>
  );
};

export default Hero;
