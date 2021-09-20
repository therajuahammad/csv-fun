import Chart from "react-google-charts";

const ChartGraph = ({ chartType, data }) => {
  return (
    <Chart
      data={data}
      width={"100%"}
      height={"800px"}
      chartType={chartType}
      loader={<div>Loading Chart</div>}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default ChartGraph;
