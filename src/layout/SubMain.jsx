import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import useDefaultLocation from "../hooks/useDefaultLocation";
import { Sidebar } from "../components";
import {
  About,
  ClearHistory,
  History,
  Location,
  Search,
  ThemeToggler,
  Timeline,
} from "../features";

const SubMain = () => {
  useDefaultLocation();
  return (
    <>
      <Col
        className="d-flex flex-column align-items-center my-4"
        sm="12"
        md="3"
        style={{ minWidth: "fit-content" }}
      >
        <Sidebar>
          <About />
          <ThemeToggler />
          <ClearHistory />
        </Sidebar>
        <History />
      </Col>
      <Col className="d-flex flex-column justify-content-center" sm="12" md="6">
        <Card className="card-location-data mx-2 my-2">
          <CardHeader>
            <Search />
          </CardHeader>
          <CardBody>
            <Location />
          </CardBody>
          <CardFooter>
            <Timeline />
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};
export default SubMain;
