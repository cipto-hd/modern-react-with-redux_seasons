import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  const isNorthAndSummer = month > 2 && month < 9 && lat > 0;
  const isSouthAndSummer = (month < 3 || month > 8) && lat < 0;

  return isNorthAndSummer || isSouthAndSummer ? "summer" : "winter";
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    Icon: ({ className }) => (
      <i className={`${className} massive sun icon`}></i>
    ),
  },
  winter: {
    text: "Burr, it is chilly",
    Icon: ({ className }) => (
      <i className={`${className} massive snowflake icon`}></i>
    ),
  },
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, Icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <Icon className="icon-left" />
      <h1>{text}</h1>
      <Icon className="icon-right" />
    </div>
  );
};

export default SeasonDisplay;
