import Card from "../../ui/Card";

const Message = () => {
  const textGradient = {
    background: "-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <Card toscroll="Message">
      <div className="flex flex-wrap lg:flex-nowrap justify-between">
        <div className="w-full lg:w-[480px]">
          <p
            className="text-lg text-gray-500 hover:text-black w-fit"
            style={textGradient}
          >
            MESSAGE FROM TEAM INVERGE
          </p>
          <h2
            className="text-3xl w-28 my-6 text-[#204362] font-bold"
            style={textGradient}
          >
            Our Mission
          </h2>
          {/* <ul className="flex gap-2">
            <li className="w-16 h-2 bg-[#24395C] rounded-md"></li>
            <li className="w-8 h-2 bg-[#24395C] rounded-md"></li>
            <li className="w-4 h-2 bg-[#24395C] rounded-md"></li>
            <li className="w-2 h-2 bg-[#24395C] rounded-md"></li>
          </ul> */}
          <p className="pr-10 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <p className="pr-10 mt-2">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
        </div>
        <div className="border-2 border-black h-[356px] lg:my-auto mt-8 w-full lg:w-[500px]"></div>
      </div>
    </Card>
  );
};
export default Message;
