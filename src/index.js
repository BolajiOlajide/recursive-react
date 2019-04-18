import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const parentStyle = {
  border: "1px solid black",
  margin: "10px 0",
  padding: "5px"
};

const childStyle = {
  margin: 0,
  padding: 0
};

function ListShit({ name, data }) {
  const mainStyle = data.length > 0 ? parentStyle : childStyle;
  const spanStyle =
    data.length > 0
      ? {
          fontSize: "20px",
          fontWeight: "bold"
        }
      : childStyle;

  return (
    <div style={mainStyle}>
      <span style={spanStyle}>{name}</span>
      {data.map((item, index) => {
        return <ListShit name={item} key={index} data={[]} />;
      })}
      <br />
    </div>
  );
}

const userData = [
  {
    name: "Mel",
    hobbies: ["Drinking", "Sleeping", "Eating"]
  },
  {
    name: "Bolaji",
    hobbies: ["Studying", "Reading", "Doing Nothing"]
  },
  {
    name: "Damisi",
    hobbies: ["FPL", "Gaming", "fancy things"]
  },
  {
    name: "Chismo",
    hobbies: ["Eating Definitely", "Talking", "Football"]
  }
];

function App() {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>HOBBIES</h1>
      {userData.map(item => (
        <ListShit name={item.name} data={item.hobbies} />
      ))}
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
