import { Route, Routes } from "react-router";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const addBox = (newBoxData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner: newBoxData.boxOwner,
      boxSize: newBoxData.boxSize,
    };
    setMailboxes((pre) => [...pre, newMailbox]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  )
};

export default App;
