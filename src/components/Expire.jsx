import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";

const Expire = ({ variant, message, expired }) => {
  useEffect(() => {
    setTimeout(() => {
      expired();
    }, "5000");
  }, [message]);

  return (
    <Alert variant={variant} style={{ marginLeft: "3%" }}>
      {message}
    </Alert>
  );
};

export default Expire;
