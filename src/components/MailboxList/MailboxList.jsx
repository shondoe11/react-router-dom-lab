import { Link } from "react-router"
import './MailboxList.css'

const MailboxList = ({mailboxes}) => {
    if (!mailboxes) {return <h1><style color="red">No Mailboxes</style></h1>}
    return (
        <main>
            <h2>Mailboxes</h2>
            <div className="mail-grid">
                {mailboxes.map((mailbox) => (
                    <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
                        <div className="mail-box">Mailbox #{mailbox._id}</div>
                    </Link>
                ))}
            </div>
        </main>
    )
};

export default MailboxList;
