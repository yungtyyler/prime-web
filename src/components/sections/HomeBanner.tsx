const HomeBanner = () => {
  return (
    <div className="w-full bg-black p-4">
      <div className="page__container">
        <div className="my-10 flex flex-col items-center gap-8">
          <h1 className="uppercase text-white font-extrabold text-4xl">
            Our Process
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[100px] h-[100px] rounded-full bg-prime-green-700 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">1</span>
              </div>
              <h2 className="text-white text-xl font-bold">Planning</h2>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptatem.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[100px] h-[100px] rounded-full bg-prime-green-700 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">2</span>
              </div>
              <h2 className="text-white text-xl font-bold">Design</h2>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptatem.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[100px] h-[100px] rounded-full bg-prime-green-700 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">3</span>
              </div>
              <h2 className="text-white text-xl font-bold">Development</h2>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
