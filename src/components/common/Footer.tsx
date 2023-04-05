const Footer = () => {  return (
    <div className="bg-[#D9D9D9] min-h-[322px] text-black">
      <div className="grid grid-cols-2 mx-auto">
        <div className="col-span-2 flex justify-center p-3 md:col-span-1 pt-20 md:pt-24">
          <div className="flex-shrink-0">
            <img src="/assets/logo/logo-black.png" alt="Ainetica" />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center p-3 md:col-span-1 pt-20 pl-3 pr-3">
          <div className="container grid grid-cols-3 text-sm md:text-base p-3">
            <div className="col-span-1">
              <h3 className="text-base md:text-lg font-bold">Site Map</h3>
              <div className="pt-2">Analytic</div>
              <div>Whales</div>
              <div>Discord Bot</div>
              <div>Research</div>
              <div>Drops</div>
            </div>
            <div className="col-span-1">
              <h3 className="text-base md:text-lg font-bold">Company</h3>
              <div className="pt-2">About Us</div>
              <div>Term of Use</div>
              <div>Privacy Policy</div>
              <div>Contact Us</div>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-bold">Connect</h3>
              <div className = "pt-2 flex flex-row items-center">
                <img className = "w-[30px] md:w-[50px] pr-1" src="/assets/etc/discord.png" alt="Discord" />
                <span>Discord</span>
              </div>
              <div className = "pt-3 flex flex-row items-center">
                <img className = "w-[30px] md:w-[50px] pr-1" src="/assets/etc/telegram.png" alt="Telegram" />
                <span>Telegram</span>
              </div>
              <div className = "pt-3 flex flex-row items-center">
                <img className = "w-[30px] md:w-[50px] pr-1" src="/assets/etc/twitter.png" alt="Twitter" />
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
