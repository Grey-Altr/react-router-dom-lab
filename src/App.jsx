import { Route, Routes } from 'react-router';

const mailboxState = [
  {
  _id: 1,
  boxSize: 'Small',
  boxOwner: 'Alex',
},
];

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/mail' element={<MailboxList mail={mail} />} />
        <Route path='*' />
      </Routes>
    </>
  );
};

export default App;
