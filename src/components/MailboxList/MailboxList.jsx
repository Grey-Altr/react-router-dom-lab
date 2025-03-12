import { Link } from 'react-router';

const MailboxList = (mail) => {
    console.log(mail);

    return (
      <>
        <h2>Mailbox List</h2>
        <ul>
          <li key={mail._id}>
            <Link to={`/mail//${mail._id}`}>
              <h3>Mailbox{mail._id}</h3>
            </Link>
          </li>
        </ul>
      </>
    );
};

export default MailboxList;