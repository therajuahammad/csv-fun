import Table from "../components/table";
import { useSelector } from "react-redux";

const TableView = () => {
  const csvData = useSelector((state) => state.data);

  return (
    <>
      <Table data={csvData} />
    </>
  );
};

export default TableView;
