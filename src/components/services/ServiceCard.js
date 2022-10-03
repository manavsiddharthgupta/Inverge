const ServiceCard = () => {
  return (
    <div className="group rounded-xl text-center p-8 shadow-[_0_7px_29px_0_rgba(100,100,111,0.2)] hover:text-white transition-all duration-500 after:content-[''] after:absolute relative after:w-full after:h-0 after:left-0 after:top-0 after:bg-gradient-to-br after:from-[#360033] after:to-[#0b8793] after:-z-10 z-10 after:hover:h-full after:transition-all after:duration-500 after:ease-out after:rounded-xl bg-white">
      <div className="w-24 h-[70px] rounded-[30px_5px_30px_5px] bg-black group-hover:bg-white mx-auto group-hover:rounded-[5px_30px_5px_30px] transition-all duration-300"></div>
      <h2 className="my-4 text-xl font-semibold">Web Development</h2>
      <p className="text-gray-600  group-hover:text-white">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        lobortis mollis metus at maximus.
      </p>
      <p className="w-fit mx-auto mt-4 cursor-pointer font-medium">Read more</p>
    </div>
  );
};
export default ServiceCard;
