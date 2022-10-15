import React from "react";
import Component from "./Component"
import ReactDOM from "react-dom/client";

export default function App() {
	return (<Component />)
}

const rootEl = document.getElementById("root")
ReactDOM.createRoot(rootEl).render(<App />)