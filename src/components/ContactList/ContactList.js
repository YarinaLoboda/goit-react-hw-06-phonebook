import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { DeleteContactButton } from './ContactList.styled';

const getFilteredContacts = (items, filter) => {
  if (filter.trim() === '') {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const items = useSelector(state => state.items);

  return (
    <ul>
      {getFilteredContacts(items, filter).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <DeleteContactButton
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContact({ id }))}
          >
            Delete
          </DeleteContactButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
