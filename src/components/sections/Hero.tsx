import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="grid md:grid-cols-2 gap-10 py-12 justify-center items-center md:max-w-6xl mx-auto">
        <div className="col-span-1">
          <div className="p-10 bg-white drop-shadow-lg border border-gray-200 rounded text-center md:text-start">
            <h1 className="text-4xl font-bold">Prime Web Solutions</h1>
            <p className="text-2xl">
              Let us help you make your dreams a reality
            </p>
            <Link href="/contact">
              <button
                type="button"
                className="bg-prime-purple-500 text-white px-4 py-1 mt-4 rounded font-semibold text-lg hover:brightness-110 hover:shadow-xl transition ease-in-out duration-150"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
