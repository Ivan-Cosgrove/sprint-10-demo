import { data } from "../utility/constants.js";

function Talent({ selectedTalent }) {
  let talent = data.find((item) => {
    return item.name === selectedTalent;
  });

  talent = talent?.image
    ? talent
    : data.find((item) => {
        return item.name == "fauna";
      });
  return <img src={talent.image} alt={talent.name} />;
}

export default Talent;
