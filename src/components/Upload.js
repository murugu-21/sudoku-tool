import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import UploadImage from "./UploadImage";

const Upload = () => {
  const [grid, setGrid] = useState(
    [...Array(9)].map(() => Array(9).fill(null))
  );
  return (
    <>
      <p>Feature not yet complete</p>
      <UploadImage
        setGrid={(grid) => {
          setGrid(grid);
        }}
      />
      {grid.map((row, i) => {
        return (
          <Row key={i}>
            {row.map((item, j) => {
              return <Col key={j}>{item}</Col>;
            })}
          </Row>
        );
      })}
    </>
  );
};

export default Upload;
