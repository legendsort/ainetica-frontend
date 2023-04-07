interface IGoal {
  image: string;
  title: string;
}
const GoalCard = ({ image, title }: IGoal) => {
  return <div className="bg-white rounded-md p-2">
    <div className="flex flex-col justify-center items-center">
      <img className="w-[34px] md:w-[62px] lg:w-[102px] text-[8px]" src = {`assets/goals/${image}.png`} alt="goal" />
      <p className = "md:max-w-[62px] lg:max-w-[102px] text-black text-[8px] md:text-base leading-3 text-center tracking-normal	 pt-1 md:pt-3"> {title}</p>
    </div>
  </div>;
};

export default GoalCard;
