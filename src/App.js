import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  View,
  Layer,
  Group,
  Path,
  Circle,
  Ellipse,
  Rectangle,
  PointText,
  Tool
} from "react-paper-bindings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <View width={500} height={500}>
          <Circle center={[200, 200]} fillColor={"#61DAFB"} radius={7} />
          <Rectangle
            center={[250, 350]}
            fillColor={"#ff0000"}
            opacity={0.8}
            size={[320, 120]}
          />
        </View>
      </header>
    </div>
  );
}

export default App;
