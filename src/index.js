import React from "react";
import ReactDOM from "react-dom/client";
import "./logo512.png";
import "./styles.css";

function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}
function ProfileCard() {
  return (
    <div className="card">
      <CardPhoto imageUrl={"./logo512.png"} />
      <div className="data">
        <Heading name="Sanjam" />
        <Details description="I'm a full stack developer with experience in React and Spring Framework" />
        <SkillList skills={["HTML/CSS😁", "JAVA", "JAVASCRIPT"]} />
      </div>
    </div>
  );
}

function Heading(props) {
  return <h2>{props.name}</h2>;
}

function Details(props) {
  return <p>{props.description}</p>;
}

function SkillList(props) {
  return (
    <p className="skill-list">
      <Skill skill={props.skills[0]} color="red" />
      <Skill skill={props.skills[1]} color="blue" />
      <Skill skill={props.skills[2]} color="green" />
    </p>
  );
}

function Skill(props) {
  return (
    <p style={{ backgroundColor: props.color }} className="skill">
      {props.skill}
    </p>
  );
}
function CardPhoto(props) {
  return (
    <div className="avatar">
      <img src={props.imageUrl} alt="some img" />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
