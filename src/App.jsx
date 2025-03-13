import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import '../src/App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (formData) => {
    const newMailbox = { ...formData, _id: mailboxes.length + 1 };
    setMailboxes((previousMailboxes) => [...previousMailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<h2>Home</h2>}
        />
        <Route
          path='/mailboxes'
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path='/new-mailbox'
          element={ <MailboxForm addMailbox={addMailbox} /> }
        />
        <Route 
          path='/mailboxes/:id'
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path='*'
          element={<h2>Page Not Found</h2>}
        />
      </Routes>
    </>
  );
};

export default App;