import { TextCenter } from "../styles";
import { Container } from "react-bootstrap";

const Table = ({ data }) => {
  return (
    <Container className="my-5">
      {!data?.length > 0 ? (
        <TextCenter>
          <h5>Data not found!</h5>
        </TextCenter>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                {Object.keys(data[0])?.map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data?.map((item, idx) => (
                <tr key={idx}>
                  {Object.values(item).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};

export default Table;
