import { useParams } from "react-router";

const MailboxDetails = ({mailboxes}) => {
    const {mailboxId} = useParams();
    const selectdBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    if (!selectdBox) {return (<h2>404 Mailbox!</h2>)}

    return (
        <main>
            <h2>Mailbox Details</h2>
            <dt>ID: </dt>
                <dd>{selectdBox._id}</dd>
            <dt>Owner: </dt>
                <dd>{selectdBox.boxOwner}</dd>
            <dt>Size: </dt>
                <dd>{selectdBox.boxSize}</dd>
        </main>
    )
};

export default MailboxDetails;