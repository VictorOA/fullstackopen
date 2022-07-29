const Header = (props) => {
  return <h1> {props.course.name} </h1>;
};

const Part = (props) => {
  return (
    <p>
      {" "}
      {props.part} {props.exercises}
    </p>
  );
};

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}  />)}

    </div>
  );
};

const Total = ({parts}) => {
  const init = 0;
  const total = parts.reduce( (pv, cv) => pv + cv.exercises, init)
  return <p>Number of exercises: {total}</p>;
};

export const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};


