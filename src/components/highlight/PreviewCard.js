import CountUp from "react-countup";
const PreviewCard = () => {
  return (
    <div className="group w-60 p-8 rounded-xl shadow-[_0_7px_29px_0_rgba(100,100,111,0.2)] hover:text-white transition-all duration-500 after:content-[''] after:absolute relative after:w-full after:h-0 after:left-0 after:top-0 after:bg-gradient-to-br after:from-[#360033] after:to-[#0b8793] after:-z-10 z-10 after:hover:h-full after:transition-all after:duration-500 after:ease-out after:rounded-xl bg-white">
      <div className="w-24 h-24 rounded-full border-2 border-black mx-auto"></div>
      <h1 className="text-4xl font-bold text-center my-2">
        <CountUp start="0" end="69" duration="3" />
      </h1>
      <p className="group-hover:text-white text-center transition-all duration-200 text-gray-600">
        Completed Project
      </p>
    </div>
  );
};
export default PreviewCard;
