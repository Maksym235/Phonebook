import { AiFillCloseCircle } from "react-icons/ai";
import { Item, Button } from "./ContactItem.styled";
import PropTypes from "prop-types";

// ----------REDUX---------------
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Contacts/operations";

export function Contact({ contact: { _id, name, phone } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(_id));
  return (
    <Item key={_id}>
      {name}: {phone}
      <Button type="button" onClick={handleDelete}>
        <AiFillCloseCircle />
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
