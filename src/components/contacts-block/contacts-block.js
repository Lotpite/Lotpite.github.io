import React from 'react';
import './contacts-block.css';

const ContactsBlock = ({data}) => {
    console.log(data)
    const {phone, email} = data;
    const hrefPhone = `tel:${phone}`;
    const hrefMail = `mailto:${email}`;
    return (
        <div className="contacts">
            <h3 className="sidebar-title">Contacts</h3>
            <div>
                <span className="contacts-type">C:</span>
                <a className="contacts-link" href={hrefPhone}>{phone}</a>
            </div>
            <div>
                <span className="contacts-type">E:</span>
                <a className="contacts-link" href={hrefMail}>{email}</a>
            </div>
        </div>
    )
}

export default ContactsBlock;