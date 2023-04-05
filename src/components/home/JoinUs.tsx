const Footer = () => {  return (
    <div className="bg-white min-h-[365px] text-black">
      <div className="container grid grid-cols-3 mx-auto">
        <div className="col-span-3 flex flex-col justify-center items-center p-3 md:col-span-1 pt-20 md:pt-24">
          <div className="max-w-[280px]">
            <h1 className="text-2xl">Join Our Community!👋</h1>
            <p className="text-sm pt-5">
              Lorem ipsum dolor sit amet consectetur. Pretium massa sit
              malesuada nibh sem.
            </p>
          </div>
          <div className="pt-10 md:pt-5">
            <div className="relative min-w-[300px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.544 1.168C0.800001 0.807881 1.13824 0.514045 1.53061 0.310902C1.92298 0.107759 2.35816 0.00117388 2.8 0H17.2C18.136 0 18.953 0.47 19.456 1.168C19.799 1.646 20 2.235 20 2.867V13.133C20 14.682 18.78 16 17.2 16H2.8C1.22 16 0 14.682 0 13.133V2.867C0 2.235 0.2 1.646 0.544 1.167V1.168ZM2.933 2L9.26 8.965C9.35373 9.06812 9.46797 9.15051 9.59541 9.20689C9.72284 9.26327 9.86065 9.29239 10 9.29239C10.1393 9.29239 10.2772 9.26327 10.4046 9.20689C10.532 9.15051 10.6463 9.06812 10.74 8.965L17.067 2H2.933ZM18 3.948L12.22 10.31C11.9388 10.6194 11.5961 10.8665 11.2138 11.0357C10.8315 11.2048 10.418 11.2922 10 11.2922C9.58195 11.2922 9.16852 11.2048 8.78622 11.0357C8.40391 10.8665 8.06118 10.6194 7.78 10.31L2 3.948V13.133C2 13.647 2.392 14 2.8 14H17.2C17.608 14 18 13.647 18 13.133V3.948Z"
                    fill="#323B4B"
                  />
                </svg>
              </div>
              <button type="submit" className="bg-[#323B4B] rounded-full text-white absolute right-1 top-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>

              <input
                type="text"
                id="email"
                className="gray-50 rounded-full border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter you email address"
              />
            </div>
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
