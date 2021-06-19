import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import url from "./url";

const UploadImage = (props) => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileUpload = () => {
    setErr(null);
    const formData = new FormData();

    formData.append("sudokuImage", file, file.name);
    axios.post(url.concat("sudokuImage"), formData).then((res) => {
      console.log(res.data);
      props.setGrid(res.data);
    });
  };
  useEffect(() => {
    if (file !== null && file !== undefined) {
      if (["image/jpeg", "image/jpg", "image/png"].includes(file.type))
        setErr(null);
      else setErr("JPEG, JPG, PNG formats only supported");
      setPreview(URL.createObjectURL(file));
    }
  }, [file]);
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />

      <button
        variant="success"
        disabled={file === null || err !== null}
        onClick={() => {
          onFileUpload();
        }}
      >
        Upload
      </button>
      {err && <p>{err}</p>}
      {preview && (
        <Container fluid>
          <Row>
            <Col xs={6}>
              <Image
                className="preview"
                src={preview}
                alt="Preview of image"
                thumbnail
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default UploadImage;
