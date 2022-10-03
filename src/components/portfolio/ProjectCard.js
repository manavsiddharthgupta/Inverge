const ProjectCard = () => {
  return (
    <div className="bg-white mb-8 hover:bg-gradient-to-r hover:from-[#360033] hover:to-[#0b8793] hover:text-white cursor-pointer shadow-[_0_7px_29px_0_rgba(100,100,111,0.2)] transition-all duration-200">
      <div className="h-72 border-[1px] border-black bg-slate-400"></div>
      <div className="p-6">
        <h1 className="text-xl mb-1 font-semibold sm:font-bold">
          Creative Design Web App
        </h1>
        <p className="text">Web Development</p>
      </div>
    </div>
  );
};
export default ProjectCard;
