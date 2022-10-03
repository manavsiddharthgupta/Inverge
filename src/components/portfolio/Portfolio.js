import Card from "../../ui/Card";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const textGradient = {
    background: "-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <Card toscroll="Projects">
      <h1
        className="text-2xl lg:text-4xl font-bold text-center text-[#204362] py-2"
        style={textGradient}
      >
        Our Impressive Projects
      </h1>
      <p className="py-4 max-w-[500px] mx-auto text-center text-[#204362]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        lobortis mollis metus at maximus. Donec bibendum tristique nibh ut
        porttitor.
      </p>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Card>
  );
};
export default Portfolio;
