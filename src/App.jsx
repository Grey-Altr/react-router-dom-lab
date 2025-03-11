import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/mail' element={<MailboxList mail={mail} />} />
      </Routes>
    </>
  );
};

export default App;
