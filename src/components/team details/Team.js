import Card from "../../ui/Card";
import PersonDetail from "./PersonDetail";

const Team = () => {
  const teamDetail = [
    { name: "Ishaan Ratan Yadav" },
    { name: "Manav Gupta" },
    { name: "Gaurav Kumar" },
  ];

  const textGradient = {
    background: "-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Card toscroll="Team">
      <div className="text-center">
        <h2
          className="text-2xl lg:text-4xl font-bold mb-4 text-[#204362]"
          style={textGradient}
        >
          Meet The Team
        </h2>
        <p className="max-w-[28rem] mx-auto text-[#204362]">
          Ideas, style, and simplicity are what define us. We as a team are
          dedicated exclusively to excellence in home automation.
        </p>
        <ul className="flex gap-2 justify-center mt-6">
          <li className="w-16 h-2 bg-slate-300 rounded-md"></li>
          <li className="w-8 h-2 bg-slate-300 rounded-md"></li>
          <li className="w-4 h-2 bg-slate-300 rounded-md"></li>
          <li className="w-2 h-2 bg-slate-300 rounded-md"></li>
        </ul>
      </div>
      <div className="mt-16 flex justify-around xl:justify-between gap-4 flex-wrap">
        {teamDetail.map((member) => {
          return <PersonDetail key={member.name} details={member} />;
        })}
      </div>
    </Card>
  );
};
export default Team;
