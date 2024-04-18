import { History, Location, Search } from "./features";
import { AppProvider } from "./context/AppContext";
import { Footer, Navbar } from "./components";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="divMain flex-grow-1" fluid>
          <Row lg="3" md="2" sm="1" xs="1">
            <Col
              className="d-flex align-items-center mx-auto"
              md="3"
              lg="3"
            ></Col>
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
              <Col
                className="d-flex align-items-center mx-auto"
                xs="9"
                sm="5"
                lg="3"
              >
                <History />
              </Col>
            </AppProvider>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
