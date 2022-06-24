import React from "react";
import ReactDOM from "react-dom/client";
// import HooksApp from "./HooksApp"; 
// import {CounterApp} from "./01-useState/CounterApp";
// import { CounterAppWithCustomHook } from "./01-useState/CounterAppWithCustomHook";
import SimpleForm from "./02-useEffect/SimpleForm";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterAppWithCustomHook/> */}
    <SimpleForm/>
  </React.StrictMode>
);
