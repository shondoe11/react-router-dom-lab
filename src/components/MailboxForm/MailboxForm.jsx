import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({addBox}) => {
    const [boxOwner, setBoxOwner] = useState('');
    const [boxSize, setBoxSize] = useState('smol');

    const naviG = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({boxOwner, boxSize});
        naviG('/mailboxes');
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Owner: </label>
                <input id='boxOwner' value={boxOwner} onChange={(e) => setBoxOwner(e.target.value)} required />
                <label htmlFor="boxSize"> Box Size:</label>
                <select id='boxSize' value={boxSize} onChange={(e) => setBoxSize(e.target.value)} >
                    <option value='smol'>Small</option>
                    <option value='med'>Medium</option>
                    <option value='lar'>Large</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm;