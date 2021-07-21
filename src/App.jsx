import React from "react";
import "./App.scss";
// import { useRoutes } from "./routes";

// import { Navbar } from "./components/navBar/navBar";
import { OurTeam } from "./components/OurTeam";
import { DeliciousMenu } from "./components/DeliciousMenu";
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
        <OurTeam></OurTeam>
        <DeliciousMenu />
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
