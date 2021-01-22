import React from 'react';
import './App.scss';
import { Contact } from "./components/Contact/Contact";
import { ContactForm } from "./components/ContactForm";

export class App extends React.Component {
    state = {
        isShowForm: false,
        contact: [{
            name: 'John',
            surName: 'Bean',
            phone: '+123123'
        },
        {
            name: 'Dave',
            surName: 'Gaham',
            phone: '+323333'
        },
        {
            name: 'Mike',
            surName: 'Wasowsky',
            phone: '+34123123'
        },
        {
            name: 'Miles',
            surName: 'Morales',
            phone: '+21334532324'
        },
        {
            name: 'Keanu',
            surName: 'Reeves',
            phone: '+12355555'
        },]
    };

render() {
    // const {ShowForm} = this.state;
    // const form = ShowForm && (
    //     <ContactForm updateData={this.updateData} addContact={this.addContact} />
    // );
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
                    {this.state.contact.map(contact => (
                        <Contact contact={contact}  />
                    ))}
                </tbody>
            </table>
            <button className='button' onClick={this.toggleForm} disabled={this.state.isShowForm} >Add contact</button>

            {this.state.isShowForm ?
                <ContactForm updateData={this.updateData} addContact={this.addContact} /> :
                null}

        </div>
    );
}
    toggleForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    updateData = (value) => {
        this.setState({ isShowForm: !value });
    }
    addContact = (value) => {
        this.setState({
            contact: [...this.state.contact, value]
        })
    }
}

