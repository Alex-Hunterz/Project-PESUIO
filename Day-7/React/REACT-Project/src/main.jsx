import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <div>Hello World</div>
      <p class="para" className="text-3xl font-bold text-red-500">
        THEY DONT KNOW ME SON
      </p>
      <App />
    </>
  </React.StrictMode>
);

/* jsx-javascript extension */
