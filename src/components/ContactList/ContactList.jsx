import css from './contact-list.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';

const ContactList = ({ items }) => {
  const dispatch = useDispatch();

  if (!items || items.length === 0) {
    return null;
  }
  const elements = items.map(({ id, name, phone }) => (
    <li key={id} className={css.list}>
      {name}: {phone}
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        {' '}
        Delete
      </button>
    </li>
  ));
  return <ul className={css.elements}>{elements}</ul>;
};

export default ContactList;
