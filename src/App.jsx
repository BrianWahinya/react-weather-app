import { AppProvider } from "./context/AppContext";
import { Footer, Navbar } from "./components";
import { Container, Row } from "reactstrap";
import { SubMain } from "./layout";
// import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <Row
          className="justify-content-center align-items-center"
          sm="1"
          md="2"
        >
          <AppProvider>
            <SubMain />
          </AppProvider>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
