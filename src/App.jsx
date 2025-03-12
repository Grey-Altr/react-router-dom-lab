import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';

const App = () => {
  const [mailbox, setMailbox] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/mailbox' element={<MailboxList mail={mail} />} />
        <Route 
          path='/mailbox/:mailboxId'
          element={<MailboxDetails mail={mail} />}
        />
        <Route path='*' />
      </Routes>
    </>
  );
};

export default App;
