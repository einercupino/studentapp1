import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";

const App = () => (
  <div>
      <StudentForm/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
