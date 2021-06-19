import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
const NewGame = (props) => {
  return (
    <DropdownButton
      id="dropdown-item-button"
      variant="primary"
      title="new Game"
      size="lg"
      style={{ width: "100%" }}
    >
      <Dropdown.Item as="button" onClick={() => props.onClick(0)}>
        Easy
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => props.onClick(1)}>
        Medium
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => props.onClick(2)}>
        Hard
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default NewGame;
