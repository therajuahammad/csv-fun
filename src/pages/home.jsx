import React from "react";
import { TextCenter } from "../styles";
import CSVReader from "react-csv-reader";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, SelectMenu, SelectMenuWrap } from "../styles";
import {
  saveDataAction,
  saveTargetAction,
  saveInheritanceAction,
  saveRenderedDataAction
} from "../redux/action";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { csvData, inheritance, target } = useSelector((state) => state.data);

  const handleForce = (data) => {
    dispatch(saveDataAction(data));
  };

  const onInheritanceHandler = (event) => {
    dispatch(saveInheritanceAction(event.target.value));
  };

  const onTargetHandler = (event) => {
    dispatch(saveTargetAction(event.target.value));
  };

  const onClickHandler = () => {
    const renderedData = csvData?.map((item) => {
      return {
        [inheritance]: item[inheritance],
        [target]: item[target]
      };
    });
    dispatch(saveRenderedDataAction(renderedData));
    history.push("/table");
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

        {csvData.length > 0 && (
          <SelectMenuWrap>
            <SelectMenu>
              <label htmlFor="inheritance">Inheritance</label>
              <select onChange={onInheritanceHandler}>
                <option>Select Inheritance</option>
                {Object.keys(csvData[0])?.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </SelectMenu>

            <SelectMenu>
              <label htmlFor="target">Target</label>
              <select onChange={onTargetHandler}>
                <option>Select Target</option>
                {Object.keys(csvData[0])?.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </SelectMenu>

            <Button onClick={onClickHandler}>View Data</Button>
          </SelectMenuWrap>
        )}
      </TextCenter>
    </Container>
  );
};

export default Home;
