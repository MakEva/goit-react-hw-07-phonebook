import css from './Filter.module.css';
import ContactList from '../ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

const Filter = () => {
  const { items, isLoading, error } = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContact = () => {
    if (!filter) {
      return items;
    }
    const normalisedFilter = filter.toLowerCase();
    const filteredContact = items.filter(({ name, phone }) => {
      const normalizedName = name.toLowerCase();
      const normalizedNumber = phone.toLowerCase();
      return (
        normalizedName.includes(normalisedFilter) ||
        normalizedNumber.includes(normalisedFilter)
      );
    });
    return filteredContact;
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  const item = getFilteredContact();
  return (
    <>
      <input
        className={css.filter_input}
        onChange={changeFilter}
        name="filter"
      />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {Boolean(items.length) && <ContactList items={item} />}
    </>
  );
};

export default Filter;
