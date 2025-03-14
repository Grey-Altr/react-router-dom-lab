import { useParams } from 'react-router';

const MailboxDetails = ({ mailboxes }) => {
    const { id } = useParams();
    console.log(id);

    const mailbox = mailboxes.find((mailbox) => (
        mailbox._id === Number(id)
    ));

    if (!mailbox) {
        return <h2>Mailbox Not Found</h2>
    };

    return (
        <>
            <h2>Mailbox {mailbox._id}</h2>
            <h4>Details</h4>
            <dl>
                <dt>Boxholder</dt>
                <dd>{mailbox.boxOwner}</dd>
                <dt>Box Size</dt>
                <dd>{mailbox.boxSize}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;