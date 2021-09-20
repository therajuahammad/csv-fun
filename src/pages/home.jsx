import React from "react";
import { TextCenter } from "../styles";
import CSVReader from "react-csv-reader";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import saveDataAction from "../redux/action";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleForce = (data) => {
    dispatch(saveDataAction(data));
    history.push("/view");
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true
  };

  return (
    <Container className="mt-5">
      <TextCenter>
        <CSVReader
          label="Upload CSV"
          cssClass="react-csv-input"
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
      </TextCenter>
    </Container>
  );
};

export default Home;
