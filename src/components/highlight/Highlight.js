import Card from "../../ui/Card";
import PreviewCard from "./PreviewCard";

const Highlight = () => {
  const textGradient = {
    background: "-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <Card toscroll="Highlight">
      <h1
        className="text-center text-2xl lg:text-4xl font-bold mb-4 text-[#204362] py-2"
        style={textGradient}
      >
        Highlight
      </h1>
      <p className="text-center sm:text-2xl sm:font-semibold lg:text-3xl lg:font-semibold text-xl font-semibold">
        We Have Completed 950+ Projects Successfully
      </p>
      <div className="flex gap-9 justify-center flex-wrap mt-10">
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </div>
    </Card>
  );
};
export default Highlight;
