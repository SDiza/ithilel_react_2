import React from 'react';
import './style.scss'

export class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: props.updateData,
            name: '',
            surName: '',
            phone: ''
        }
        this.changeInput = this.changeInput.bind(this);
    }

    render() {
        return this.state.isShow && (
            <form className='contact-book__form' onSubmit={this.saveContact}>
                <label>Name</label>
                <input
                    className={((this.state.name !== '') && !this.validateName(this.state.name) ? 'not-valid' : null)}
                    required
                    type="text"
                    value={this.state.value}
                    onChange={this.changeInput('name' )}
                />

                <label>Last Name</label>
                <input
                    className={((this.state.surName !== '') && !this.validateName(this.state.surName) ? 'not-valid' : null)}
                    required
                    type="text"
                    value={this.state.value}
                    onChange={this.changeInput('surName' )}
                />
                <label>Phone</label>
                <input
                    className={((this.state.phone !== '') && !this.validatePhone(this.state.phone) ? 'not-valid' : null)}
                    required
                    type="text"
                    value={this.state.value}
                    onChange={this.changeInput('phone' )}
                />
                <button type='submit' className='button'
                        disabled={!(this.validateName(this.state.name) &&
                            this.validateSurName(this.state.surName) &&
                            this.validatePhone(this.state.phone))} >Save</button>
                <button className='button' onClick={this.toggleForm}>Cancel</button>
            </form>
        );
    }
    toggleForm = () => {
        this.setState({
            isShow: false
        });
        this.props.updateData(this.state.isShow);
    }
    saveContact = (event) => {
        event.preventDefault();
        const contact = {
            name: this.state.name,
            surName: this.state.surName,
            phone: this.state.phone
        }
        this.props.addContact(contact);
        this.toggleForm();

    }
    changeInput(field) {
        return event => {
            this.setState({
                [field]: event.target.value,
            })
        }
    }

    validateName(value) {
        return value.length >= 3;
    }

    validateSurName(value) {
        return value.length >= 3;
    }

    validatePhone(value) {
        return value.length >= 10;
    }

}