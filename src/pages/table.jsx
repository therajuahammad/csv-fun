import Table from "../components/table";
import { useSelector } from "react-redux";

const TableView = () => {
<<<<<<< HEAD
  const { renderedData } = useSelector((state) => state.data);

  return (
    <>
      <Table data={renderedData} />
=======
  const csvData = useSelector((state) => state.data);

  return (
    <>
      <Table data={csvData} />
>>>>>>> 11e6054e5441bb33890370b23401e9afd62a08e9
    </>
  );
};

export default TableView;
