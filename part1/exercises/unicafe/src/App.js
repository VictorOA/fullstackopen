import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}> {text}</button>;
};

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const average = clicks.good + clicks.neutral * 0 + clicks.bad * -1;
  const positive = (clicks.good * 100) / all;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic name="good" value={clicks.good} />
          <Statistic name="neutral" value={clicks.neutral} />
          <Statistic name="bad" value={clicks.bad} />
          <Statistic name="all" value={all} />
          <Statistic name="average" value={average / all} />
          <Statistic name="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Statistic = ({ name, value }) => {
  if (name === "positive") {
    return (
      <tr>
        <td>{name} </td>
        <td> {value} %</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{name} </td>
      <td> {value}</td>
    </tr>
  );
};

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 });
  };
  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  };
  const handleBadlick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 });
  };

  return (
    <div>
      <h1> give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadlick} text="bad" />
      <h1> statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
