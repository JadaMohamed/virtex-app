import Hero from "./components/Hero";
import card1 from "./visuals/card1.svg";
import card2 from "./visuals/card2.svg";
import card3 from "./visuals/card3.svg";
import h from "./visuals/title-icon.png";
import team from "./visuals/team-member.svg";
import team3 from "./visuals/team-member3.svg";
import team2 from "./visuals/team-member2.svg";

function App() {
  return (
    <>
      <Hero />
      <div className="md:py-24 py-14 md:px-20 px-5 flex">
        <div className="max-w-7xl m-auto">
          <h1 className="flex gap-3 text-white items-center font-semibold text-lg mb-10">
            <img className="h-7" src={h} alt="" /> Finalités de l’entreprise
          </h1>
          <div className=" flex justify-between  gap-8 overflow-x-auto">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card1} alt="" />
          </div>
        </div>
      </div>
      <div className="md:pb-24 pb-14 md:px-20 px-5 flex">
        <div className="max-w-7xl m-auto">
          <h1 className="flex gap-3 text-white items-center font-semibold text-lg mb-10">
            <img className="h-7" src={h} alt="" /> Finalités de l’entreprise
          </h1>
          <div className=" flex justify-between  gap-8 overflow-x-auto">
            <img src={team} alt="" />
            <img src={team2} alt="" />
            <img src={team3} alt="" />
            <img src={team3} alt="" />
            <img src={team3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
