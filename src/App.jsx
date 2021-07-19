import React from "react";
import "./App.scss";
// import { useRoutes } from "./routes";

// import { Navbar } from "./components/navBar/navBar";

import { PrivetIvents } from "./components/PrivetIvents";
import { PhotoGalerie } from "./components/PhotoGalerie";
import { Contact } from "./components/Contact";
import { Map } from "./components/Map";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="mainWrap">
      <header>sa</header>
      <main>
        <PrivetIvents />
        <PhotoGalerie />
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
export default App;
