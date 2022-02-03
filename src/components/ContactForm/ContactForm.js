import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/actions';
import { nanoid } from 'nanoid';
import { AddContactButton, InputValue } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkExistContact(name)) {
      toast.error('This Name is already exists !');
      reset();
      return;
    }
    dispatch(addContact({ id: nanoid(5), name, number }));
    reset();
  };

  const checkExistContact = name => {
    const result = items.some(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (result) {
      return 1;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <label>
          Name:&nbsp;&nbsp;&nbsp;
          <InputValue
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number:
          <InputValue
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <AddContactButton type="submit">Add contact</AddContactButton>
      </form>
    </>
  );
}
