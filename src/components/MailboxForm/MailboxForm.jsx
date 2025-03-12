import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = [
  {
    _id: 0,
    boxSize: "",
    boxOwner: "",
  },
];

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailbox')
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
            Enter a Boxholder: 
        </label>
        <input
            type="text"
            name="boxOwner"
            id="boxOwner"
            value={formData.boxOwner}
            onChange={}
        />

        <label htmlFor="">
            Select a Box Size: 
        </label>
        <select name="" id="">

        </select>

        <button>Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
