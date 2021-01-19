import React from 'react';
import './style.scss'

export class ContactForm extends React.Component {
    state = {
        contacts: [
            { name: '', lastname: '', phone: ''},
    ],
        ShowForm: false,
        confirmSave: true,
        isInputValid: true,
    };

    constructor(props) {
        super(props);

        this.changeInput = this.changeInput.bind(this);
    }

    render() {
        return (
            <div className='contact-book__form'>
                <label>Name</label>
                <input required
                    type="text"
                    value={this.state.contacts.name}
                    onChange={this.changeInput('name' )}
                />
                <label>Last Name</label>
                <input required
                    type="text"
                    value={this.state.contacts.lastname}
                    onChange={this.changeInput('lastname' )}
                />
                <label>Phone</label>
                <input required
                    type="text"
                    value={this.state.contacts.phone}
                    onChange={this.changeInput('phone' )}
                />
                <button type='submit' className='button' disabled={this.state.confirmSave} onClick={() => {this.props.updateData(this.state)}}>Save</button>
                <button className='button' onClick={() => {this.props.hideForm(this.state.ShowForm)}}>Cancel</button>
            </div>
        );
    }

    changeInput(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
            });
            const valid = event.target.value;
            if (valid !== '') {
                this.setState({
                    confirmSave: false,
                });
            }
        };
    }

}