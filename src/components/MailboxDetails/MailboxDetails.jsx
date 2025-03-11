import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailId } = useParams();
    console.log('mailId:', mailId);

    const singleMailbox = props.mail.find((parcel) => (
        parcel._id === Number(mailId)
    ));
    console.log('Mail Object:', singleMailbox);

    return (
        <>
            <h2>Mailbox{singleMailbox._id}</h2>
            <h4>Details</h4>
            <dl>
                <dt>Boxholder</dt>
                <dd>{singleMailbox.boxOwner}</dd>
                <dt>Box Size</dt>
                <dd>{singleMailbox.boxSize}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;