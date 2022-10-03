import Card from "../../ui/Card";

const Testimonial = () => {
  const textGradient = {
    background: "-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <Card toscroll="Testimonial">
      <h1
        className="text-2xl lg:text-4xl font-bold text-center text-[#204362] py-1"
        style={textGradient}
      >
        What Our Clients Says
      </h1>
      <p className="py-4 max-w-[500px] mx-auto text-center text-[#204362]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        lobortis mollis metus at maximus. Donec bibendum tristique nibh ut
        porttitor.
      </p>
      <ul className="flex gap-2 justify-center mb-8">
        <li className="w-16 h-2 bg-slate-300 rounded-md"></li>
        <li className="w-8 h-2 bg-slate-300 rounded-md"></li>
        <li className="w-4 h-2 bg-slate-300 rounded-md"></li>
        <li className="w-2 h-2 bg-slate-300 rounded-md"></li>
      </ul>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-5 items-center lg:flex-col px-3 py-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#204362] dark:border-gray-700 dark:hover:bg-[#20496d] transition-all duration-200">
          <div className="border-2 border-white rounded-full min-w-[92px] h-24 mx-auto"></div>
          <div className="">
            <h1 className="text-lg font-semibold text-white lg:text-center">
              Mark Bunch | Developer Asscociate
            </h1>
            <p className="font-light lg:text-center mt-2 text-gray-200">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis mollis metus at maximus."
            </p>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-6 md:gap-8 lg:gap-5 items-center lg:flex-col px-3 py-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#204362] dark:border-gray-700 dark:hover:bg-[#20496d] transition-all duration-200">
          <div className="border-2 border-white rounded-full min-w-[92px] h-24 mx-auto"></div>
          <div className="">
            <h1 className="text-lg font-semibold text-white lg:text-center">
              Mark Bunch | Developer Asscociate
            </h1>
            <p className="font-light lg:text-center pr-4 text-gray-200 mt-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis mollis metus at maximus."
            </p>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-6 md:gap-8 lg:gap-5 items-center lg:flex-col px-3 py-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#204362] dark:border-gray-700 dark:hover:bg-[#20496d] transition-all duration-200">
          <div className="border-2 border-white rounded-full min-w-[92px] h-24 mx-auto"></div>
          <div className="">
            <h1 className="text-lg font-semibold text-white lg:text-center">
              Mark Bunch | Developer Asscociate
            </h1>
            <p className="font-light lg:text-center text-gray-200 pr-4 mt-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur lobortis mollis metus at maximus."
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Testimonial;
