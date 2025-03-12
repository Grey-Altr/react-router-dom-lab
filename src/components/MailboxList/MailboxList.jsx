import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
    console.log(mailboxes);

    return (
      <>
        <h2>Mailbox List</h2>
        <ul>
          {mailboxes.map((mailbox) => {
            return (
              <li key={mailboxes._id}>
                <Link to={`/mailboxes/${mailboxes._id}`}>
                  <h3>Mailbox{mailboxes._id}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
};

export default MailboxList;