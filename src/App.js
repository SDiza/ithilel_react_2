import React from 'react';
import './App.scss';
import { Contact } from "./components/Contact/Contact";
import {ContactForm} from "./components/ContactForm";

export class App extends React.Component {
    state = {
        contacts: [
            { name: 'John', lastname: 'Bean', phone: '+123123'},
            { name: 'Dave', lastname: 'Gaham', phone: '+323333'},
            { name: 'Mike', lastname: 'Wasowsky', phone: '+34123123'},
            { name: 'Miles', lastname: 'Morales', phone: '+21334532324'},
            { name: 'Keanu', lastname: 'Reeves', phone: '+12355555'},
    ],
        ShowForm: false,
};

render() {
    const {ShowForm} = this.state;
    const form = ShowForm && (
        <ContactForm updateData={this.updateData} hideForm={this.hideForm} />
    );
    return (
        <div className="contact-book">
            <table className='contact-book__table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map(contact => (
                        <Contact contact={contact}  />
                    ))}
                </tbody>
            </table>
            <button className='button' onClick={() => this.openForm()} >Add contact</button>
            {form}

        </div>
    );
}
    openForm() {
        this.setState({
            ShowForm: !this.state.ShowForm,
        });
    }
    hideForm = (value) => {
        this.setState({
            ShowForm: value,
        });
    }

    updateData = (value) => {
        this.setState({
            contacts: [
                ...this.state.contacts,
                value,
            ] })
    }
}

