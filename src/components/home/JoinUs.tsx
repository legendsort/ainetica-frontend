const Footer = () => {
  return (
    <div className="bg-white min-h-[365px] text-black">
      <div className="grid grid-cols-3 mx-auto">
        <div className="col-span-3 flex flex-col justify-center items-center p-3 md:col-span-1 pt-20 md:pt-24">
          <div className="max-w-[280px]">
            <h1 className="text-2xl">Join Our Community!👋</h1>
            <p className="text-sm pt-5">
              Lorem ipsum dolor sit amet consectetur. Pretium massa sit
              malesuada nibh sem.
            </p>
          </div>
          <div>
            <input />
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center p-3 md:col-span-2 pt-10 md:pt-20 pl-3 pr-3">
          <div className="container grid gap-3 md:gap-10 grid-cols-3 text-sm md:text-base p-3">
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[180px] md:max-w-[260px] justify-center items-center text-center">
                <img
                  className="mx-auto w-[40px] md:w-[60px]"
                  src="/assets/etc/twitter-light.png"
                  alt="Twitter"
                />
                <h3 className="text-xl md:text-2xl pt-3">Twitter</h3>
                <p className="text-xs pt-3">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet id tortor
                  sit.
                </p>
                <div className="pt-5 md:pt-10">
                  <button className="py-2 px-2 no-underline rounded-full font-semibold text-xs md:text-sm border-red focus:outline-none border-2">
                    Follow us on Twitter
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[180px] md:max-w-[260px] justify-center items-center text-center">
                <img
                  className="mx-auto w-[40px] md:w-[60px]"
                  src="/assets/etc/telegram-light.png"
                  alt="Telegram"
                />
                <h3 className="text-xl md:text-2xl pt-3">Telegram</h3>
                <p className="text-xs pt-3">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet id tortor
                  sit.
                </p>
                <div className="pt-5 md:pt-10">
                  <button className="py-2 px-2 no-underline rounded-full font-semibold text-xs md:text-sm border-red focus:outline-none border-2">
                    Join our telegram group
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <div className="max-w-[180px] md:max-w-[260px] justify-center items-center text-center">
                <img
                  className="mx-auto w-[40px] md:w-[60px]"
                  src="/assets/etc/discord-light.png"
                  alt="Discord"
                />
                <h3 className="text-xl md:text-2xl pt-3">Discord</h3>
                <p className="text-xs pt-3">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet id tortor
                  sit.
                </p>
                <div className="pt-5 md:pt-10">
                  <button className="py-2 px-2 no-underline rounded-full font-semibold text-xs md:text-sm border-red focus:outline-none border-2">
                    Join our discord group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
