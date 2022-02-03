import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Global, PhoneBookContainer } from './App.GlobalStyle';

export default function App() {
  const items = useSelector(state => state.items);

  return (
    <>
      <Global />
      <PhoneBookContainer>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {items.length > 0 && <Filter />}
        {items.length > 0 ? <ContactList /> : <p>Your phonebook is empty</p>}
      </PhoneBookContainer>
    </>
  );
}
