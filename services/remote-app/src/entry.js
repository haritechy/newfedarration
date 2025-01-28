import App from "./App";
import React from "react";
// src/index.js
import './index.css'; // Tailwind CSS ஐ இணைக்கவும்


// import ReactDOM from "react-dom";

// // use createRoot
// ReactDOM.render(<App/>, document.getElementById("root"));

import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);