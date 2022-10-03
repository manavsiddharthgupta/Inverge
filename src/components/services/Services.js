import Card from "../../ui/Card";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const textGradient = {
    background: "-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <Card toscroll="Services">
      <div className="text-center">
        <h1
          className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#360033] to-[#0b8793] text-transparent bg-clip-text"
          style={textGradient}
        >
          Our Awesome Services
        </h1>
        <p className="py-4 max-w-[500px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          lobortis mollis metus at maximus. Donec bibendum tristique nibh ut
          porttitor.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </Card>
  );
};
export default Services;
