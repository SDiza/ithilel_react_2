import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.surName}</td>
                <td>{this.props.contact.phone}</td>
            </tr>

        )
    }
}