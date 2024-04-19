import {
  About,
  ClearHistory,
  History,
  Location,
  Search,
  ThemeToggler,
} from "./features";
import { AppProvider } from "./context/AppContext";
import { Footer, Navbar, Sidebar } from "./components";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <main> */}
      <Container className="main" fluid>
        <Row sm="1" md="2">
          <AppProvider>
            <Col
              className="d-flex flex-column align-items-center my-4"
              sm="12"
              md={{ offset: 1, size: 3 }}
              lg={{ offset: 2, size: 3 }}
              style={{ minWidth: "fit-content" }}
            >
              <Sidebar>
                <About />
                <ThemeToggler />
                <ClearHistory />
              </Sidebar>
              <History />
            </Col>
            <Col
              className="d-flex flex-column justify-content-center"
              sm="12"
              md="6"
            >
              <Card className="card-location-data mx-2 my-2">
                <CardHeader>
                  <Search />
                </CardHeader>
                <CardBody>
                  <Location />
                </CardBody>
              </Card>
            </Col>
          </AppProvider>
        </Row>
      </Container>
      {/* </main> */}
      <Footer />
    </>
  );
}

export default App;
