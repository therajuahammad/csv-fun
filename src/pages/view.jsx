import Table from "../components/table";
import { useSelector } from "react-redux";
// import Plot from "react-plotly.js";

const View = () => {
  const data = useSelector((state) => state.data);

  // var trace1 = {
  //   x: [4, 2, 3, 4, 8, 11],
  //   mode: "markers",
  //   type: "scatter",
  //   name: "Team A",
  //   marker: { size: 12 }
  // };
  // var trace2 = {
  //   x: [1.5, 2.5, 3.5, 4.5, 9, 2],
  //   y: [5, 2, 4, 4.5, 9, 2],
  //   mode: "markers",
  //   type: "scatter",
  //   name: "Team B",
  //   marker: { size: 12 }
  // };

  // var layout = {
  //   xaxis: {
  //     range: [0.75, 100]
  //   },
  //   yaxis: {
  //     range: [0, 8]
  //   },
  //   title: "Data Labels Hover"
  // };

  // function processData(allRows) {
  //   let y = [];
  //   let x1 = [];
  //   let x2 = [];
  //   let row;

  //   let i = 0;
  //   while (i < allRows.length) {
  //     row = allRows[i];
  //     y.push(row["Date"]);
  //     x1.push(row["AAPL.Open"]);
  //     x2.push(row["Sal2"]);
  //     i += 1;
  //   }
  //   // console.log(x1);
  //   // makePlotly(y, x1, x2);
  // }

  // const raju = data.slice(0, 5).map((item) => {
  //   return {
  //     x: [item[Object.keys(item)[0]]]
  //   };
  // });

  // console.log(raju);

  return (
    <>
      <Table data={data} />
      {/* <Plot data={[trace1, trace2]} layout={layout} /> */}
    </>
  );
};

export default View;
