import React, { Component } from 'react';

export default class ContactUs extends Component{

    render(){

        return(
            <div>
                <h2>Our Contacts ContactUs page</h2>
                <img src={this.props._id} alt="This shoild be an image"/>

            </div>
        )
    }
}