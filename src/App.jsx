import icon_weather from "./assets/icon_weather.svg";
import "./App.css";
import { Location, Search } from "./features";
import { AppProvider } from "./context/AppContext";
import { Footer } from "./components";

function App() {
  return (
    <>
      <code>
        Coding & design stage: please be patient{" "}
        <span style={{ fontSize: "20px" }}>&#128521;</span>
      </code>
      <AppProvider>
        <Search />
        <Location />
      </AppProvider>
      <Footer />
    </>
  );
}

export default App;
