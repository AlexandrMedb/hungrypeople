import React from "react";
import "./App.css";
// import { useRoutes } from "./routes";

// import { Navbar } from "./components/navBar/navBar";
import { PhotoGalerie } from "./components/PhotoGalerie";
import { Map } from "./components/Map";
import { Footer } from "./components/footer";

function App() {
  return (
    <main>
      <PhotoGalerie />
      <Map />
      <Footer />
    </main>
  );
}
export default App;
