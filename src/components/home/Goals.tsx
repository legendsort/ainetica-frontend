import GoalCard from "./GoalCard";const goals = [
  {
    image: "goal-1",
    title: "Pioneering AI Advancements",
  },
  {
    image: "goal-2",
    title: "Global Connectivity",
  },
  {
    image: "goal-3",
    title: "Emotional Wellness",
  },
  {
    image: "goal-4",
    title: "Democratizing AI Access",
  },
  {
    image: "goal-5",
    title: "Democratizing AI Access",
  },
  {
    image: "goal-6",
    title: "Sustainable Platform Growth",
  },
  {
    image: "goal-7",
    title: "User-centric Innovation",
  },
  {
    image: "goal-8",
    title: "Ethical AI Development",
  },
  {
    image: "goal-9",
    title: "Cross-industry Collaboration",
  },
  {
    image: "goal-10",
    title: "Cultural Impact",
  },
];

const Goals = () => {
  return (
    <div className="bg-black text-white text-sm md:text-xl leading-5 ">
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/features/feature-back.png')" }}
      >
        <div
          className="max-w-[940px] bg-center bg-cover h-[107px] mx-auto"
          style={{ backgroundImage: "url('/assets/etc/branch.png')" }}
        >
          <div className="flex items-center justify-center ">
            <h1 className="subtitle pt-8">-Goals-</h1>
          </div>
        </div>
        <div className="mx-auto p-3 flex justify-center max-w-[840px]">
          <p className="text-center">
            Our platform has ambitious goals that will position us at the
            forefront of social media innovation and propel us toward becoming
            the most advanced platform ever created
          </p>
        </div>
        <div className="panel">
          <div className="flex gap-4 md:gap-20 justify-center">
            {goals.slice(0, 5).map((goal, index) => {
              return (
                <GoalCard key={index} image={goal.image} title={goal.title} />
              );
            })}
          </div>
          <div
            className="flex items-center justify-center bg-center bg-contain object-fill h-[231px] w-[812px] "
            style={{
              backgroundImage: "url('/assets/goals/goal-back.png')",
            }}
          >
            <div className="text-center text-3xl"> AINETICA</div>
          </div>
          <div className="flex gap-4 md:gap-20 justify-center ">
            {goals.slice(5, 10).map((goal, index) => {
              return (
                <GoalCard key={index} image={goal.image} title={goal.title} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
