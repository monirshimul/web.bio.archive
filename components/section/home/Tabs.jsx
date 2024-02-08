import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import CallbackAsChildren from "./CallbackAsChildren";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Skills from "./Skills";
const ExpTab = () => {
  return (
    <div className="container mx-auto my-10">
      <Tabs aria-label="Options">
        <Tab key="experiences" title="Experiences">
          <Card>
            <CardBody className="px-5">
              <Experience />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="skills" title="Skills">
          <Card>
            <CardBody>
              <CallbackAsChildren />
              <Skills />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="projects" title="Projects">
          <Card>
            <CardBody>
              <Navbar />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ExpTab;
