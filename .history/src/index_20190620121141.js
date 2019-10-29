import _ from "lodash";
import "./css/style";
import "./style.css";
// import "./styles.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work

  return element;
}

document.body.appendChild(component());
