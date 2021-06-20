import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";

const Expire = ({ variant, message, expired }) => {
  useEffect(() => {
    setTimeout(() => {
      expired();
    }, "5000");
  }, [expired]);

  return <Alert variant={variant}>{message}</Alert>;
};

export default Expire;
