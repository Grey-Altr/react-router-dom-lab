import { useState } from "react";
import { useNavigate } from "react-router";

// uncaught bug

const initialState = {
    _id: 0,
    boxSize: 'Small',
    boxOwner: '',
  };

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Enter a Boxholder: 
        </label>
        <input
            type="text"
            name="boxOwner"
            id="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
        />

        <label htmlFor="boxSize">
            Select a Box Size: 
        </label>
        <select
        name="boxSize"
        id="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button>Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
