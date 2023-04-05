const Hero = () => {
  return (
    <div className="flex h-screen text-white text-xl  bg-cover bg-center" style={{ backgroundImage: "url('/assets/etc/background.png')" }}>
      <div className="container mx-auto" >
        <div className="grid grid-cols-2 h-full max-w-[1100px] mx-auto">
          <div className="col-span-2 flex items-center justify-center md:col-span-1">
            <div className="flex flex-col gap-y-5 max-w-[390px]">
              <h1 className="uppercase text-4xl text-center md:text-left">Artificial Intelligence</h1>
              <p className="leading-5 text-center md:text-left">
                Our platform offers an array of innovative features designed to
                revolutionize the way users experience social media
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
