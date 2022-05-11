import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-wrap justify-center h-full">
      <Sidebar />
      <main className="container">
        <h1>Hello World</h1>
        <p>A collapsible react sidebar.</p>
      </main>
    </div>
  );
}

export default App;
