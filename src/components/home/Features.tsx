const items = [
  {
    image: "feature1",
    title: "AI-driven Avatar: ",
    description:
      "Create a realistic, digital representation of yourself that learns from your behavior, preferences, and emotions, allowing it to interact authentically on your behalf.",
    position: "ltr",
  },
  {
    image: "feature1",
    title: "Personalized AI Companion: ",
    description:
      "Develop a deep, meaningful relationship with your AI avatar, which provides emotional support, comfort, and personalized advice based on your unique needs and circumstances",
    position: "rtl",
  },
  {
    image: "feature1",
    title: "Avatar Networking: ",
    description:
      "Connect with like-minded individuals through your AI avatar, which uses advanced algorithms to find and engage with people who share your interests, values, and goals.",
    position: "ltr",
  },
  {
    image: "feature1",
    title: "Real-time Emotional Analysis: ",
    description:
      "Harness advanced voice and text analysis to detect and interpret your emotions, allowing your AI avatar to respond empathetically and supportively.",
    position: "rtl",
  },
  {
    image: "feature1",
    title: "Cross-platform Compatibility: ",
    description:
      "Seamlessly access and enjoy our platform across a range of devices, ensuring a consistent and engaging user experience.",
    position: "ltr",
  },
  {
    image: "feature1",
    title: "Secure Data Storage: ",
    description:
      "Your personal information and AI avatar data are securely stored, ensuring privacy and protection from unauthorized access.",
    position: "rtl",
  },
  {
    image: "feature1",
    title: "Continuous AI Learning: ",
    description:
      "Our platform's AI system constantly evolves and improves, providing a richer, more intuitive user experience over time.",
    position: "ltr",
  },
  {
    image: "feature1",
    title: "In-app Cryptocurrency: ",
    description:
      "Participate in a vibrant, in-app economy powered by our native cryptocurrency, allowing you to invest, transact, and earn rewards within the platform.",
    position: "rtl",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white text-sm md:text-xl leading-5 ">
      <div className="flex items-center justify-center mx-auto">
        <h1 className="subtitle pt-10">-Features-</h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto p-3">
        {items.map((item, index) => {
          return item.position === "ltr" ? (
            <div className="flex flex-row pt-1 items-center p-3" key={index}>
              <div className="custom-border ">
                <img
                  className="pr-3"
                  src={"/assets/features/" + item.image + ".png"}
                  alt="hero"
                />
              </div>

              <p className=" max-w-[800px] leading-5">
                <strong> {item.title} </strong>
                {item.description}
              </p>
            </div>
          ) : (
            <div className="flex flex-row pt-1 items-center p-3" key={index}>
              <p className=" max-w-[800px] leading-5">
                <strong> {item.title} </strong>
                {item.description}
              </p>
              <img
                className="pl-3"
                src={"/assets/features/" + item.image + ".png"}
                alt="hero"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
