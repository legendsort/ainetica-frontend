const Introduction = () => {
  return (
    <div className="bg-black text-white text-xl ">
      <div
        className="flex bg-center h-[107px] filter grayscale"
        style={{ backgroundImage: "url('/assets/etc/introduction.png')" }}
      >
        <div className="flex items-center justify-center mx-auto">
          <h1 className="subtitle pt-8">-Introduction-</h1>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto p-3">
        <p className="max-w-[940px] leading-5 text-center">
          Introducing a revolutionary social media platform designed to
          transform the way we connect, interact, and share experiences. Our
          cutting-edge app harnesses the power of artificial intelligence to
          create a truly personalized and engaging experience for each user.
        </p>
        <p className="max-w-[940px] leading-5 text-center pt-4">
          Imagine a world where your social media presence is not just a
          profile, but an AI-driven avatar that truly represents you. This
          dynamic avatar learns from your interactions, preferences, and
          emotions, allowing it to authentically represent you in the digital
          space. With our platform, you can create content, connect with new
          friends, and even receive personalized support and comfort from your
          own AI companion.
        </p>
        <p className="max-w-[940px] leading-5 text-center pt-4">
          We're redefining social media by leveraging advanced technology to
          create meaningful connections and enrich our users' lives. As an
          investor or user of our platform, you'll be part of a movement that is
          shaping the future of human interaction in the digital age. Our
          innovative approach to social media offers limitless potential for
          growth, providing an attractive investment opportunity and a chance to
          be part of something truly groundbreaking. Join us in shaping the
          future of social media and experience the difference for yourself.
        </p>
      </div>
      <div className="flex items-center justify-center p-10">
        <img
          className="w-[940px] h-[222px] md:h-[422px] filter grayscale"
          src="/assets/etc/intro.png"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Introduction;
