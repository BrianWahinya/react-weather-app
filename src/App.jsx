import "./App.css";
import { Location, Search } from "./features";
import { AppProvider } from "./context/AppContext";
import { Footer, Navbar } from "./components";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="flex-grow-1" fluid>
          <Row lg="3" md="2" sm="1" xs="1">
            <Col className="" md="3" lg="3">
              <aside className="asideControls"></aside>
            </Col>

            <AppProvider>
              <Col className="" sm="12" md="9" lg="6">
                <Card className="my-2 mx-4">
                  <CardHeader>
                    <Search />
                  </CardHeader>
                  <CardBody>
                    <Location />
                  </CardBody>
                </Card>
              </Col>
            </AppProvider>

            <Col className="" md="12" lg="3">
              <aside className="asideFavorites"></aside>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
