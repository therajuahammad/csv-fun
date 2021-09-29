import Table from "../components/table";
import { useSelector } from "react-redux";

const TableView = () => {
  const { renderedData } = useSelector((state) => state.data);

  return (
    <>
      <Table data={renderedData} />
    </>
  );
};

export default TableView;
