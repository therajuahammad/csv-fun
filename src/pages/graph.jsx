import { TabNav } from "../styles";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import ChartGraph from "../components/chart";
import { Tab, Tabs, TabPanel } from "react-tabs";

const Graph = () => {
  const { renderedData } = useSelector((state) => state.data);

  const data = [];
  if (renderedData.length > 0) {
    const arrayKeys = Object.keys(renderedData[0]);
    data.push(arrayKeys);
    renderedData.map((item) => data.push(arrayKeys.map((key) => item[key])));
  }

  return (
    <Container fluid>
      <Tabs>
        <TabNav>
          <Tab>Scatter Plot</Tab>
          <Tab>Box Plot</Tab>
          <Tab>Histogram</Tab>
        </TabNav>

        <TabPanel>
          <ChartGraph data={data} chartType="ScatterChart" />
        </TabPanel>

        <TabPanel>
          <ChartGraph data={data} chartType="Scatter" />
        </TabPanel>

        <TabPanel>
          <ChartGraph data={data} chartType="Histogram" />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default Graph;
