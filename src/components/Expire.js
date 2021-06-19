import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";

const Expire = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.expired();
    }, "5000");
  }, [props.message]);

  return <Alert variant={props.variant}>{props.message}</Alert>;
};

export default Expire;
