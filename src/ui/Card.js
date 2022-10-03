import wave from "../components/images/wave.svg";
import blob from "../components/images/blobscene.svg";
import scattered from "../components/images/scatterbg.svg";
const Card = (props) => {
  let bgWave = {
    width: "100%",
    aspectRatio: "960/300",
    backgroundImage: `url(${wave})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  let bgblog = {
    width: "100%",
    aspectRatio: "960/300",
    backgroundImage: `url(${blob})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  let bgscatter = {
    width: "100%",
    aspectRatio: "960/300",
    backgroundImage: `url(${scattered})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  let bgStyle;
  let bg;
  if (props.toscroll === "Services") {
    bg =
      "#f3f3f3 after:contents-[''] overflow-hidden relative after:absolute before:absolute after:bg-[#204362] after:w-[400px] after:h-[400px] after:rounded-full after:-top-16 after:-left-16 before:z-[-1] before:bg-[#204362] before:w-[600px] before:h-[600px] before:rounded-full before:-bottom-24 before:-right-24 after:z-[-1]";
  } else if (props.toscroll === "Highlight") {
    bg = "bg-[#eceefe]";
  } else if (props.toscroll === "Home") {
    bg = "bg-gradient-to-r from-[#360033] to-[#0b8793]";
  } else if (props.toscroll === "Projects") {
    bgStyle = bgWave;
  } else if (props.toscroll === "Message") {
    bg = "bg-[#f4f6f7]";
  } else if (props.toscroll === "Testimonial") {
    bgStyle = bgblog;
  } else if (props.toscroll === "Team") {
    bgStyle = bgscatter;
  }
  return (
    <section
      id={props.toscroll}
      className={`px-4 md:px-16 xs:px-10 py-16 lg:py-24 ${bg} z-[2]`}
      style={bgStyle}
    >
      {props.children}
    </section>
  );
};
export default Card;
