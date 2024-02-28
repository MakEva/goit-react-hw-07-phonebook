import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;
    const newContact = { name: name.value, phone: phone.value };
    onAddContact(newContact);
    console.log(newContact);
    e.target.reset();
  };

  return (
    <form className={css.contact_form} onSubmit={handleSubmit} action="">
      <label htmlFor={nameId} className={css.for_label}>
        Name
      </label>
      <input
        id={nameId}
        className={css.for_input}
        type="text"
        name="name"
        required
      />
      <label htmlFor={numberId} className={css.for_label}>
        Number
      </label>
      <input
        id={numberId}
        className={css.for_input}
        type="tel"
        name="phone"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
