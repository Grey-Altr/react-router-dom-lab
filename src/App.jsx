import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';

const mailboxState = [
  {
  _id: 1,
  boxSize: 'Small',
  boxOwner: 'Alex',
},
];

const App = () => {
  const [mail, setMail] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/mail' element={<MailboxList mail={mail} />} />
        <Route 
          path='/mail/:mailId'
          element={<MailboxDetails mail={mail} />}
        />
        <Route path='*' />
      </Routes>
    </>
  );
};

export default App;
