import React, {Component} from 'react';

import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';

import './ContactData.css';
import Button from "../../../components/UI/Button/Button";

class ContactData extends Component {

    state={
      name: '',
      email:'',
      street:'',
      postal:''
    };

    valueChanged = (event) => {

        const name = event.target.name;
        this.setState({[name]: event.target.value});

    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                email: this.state.email,
                street: this.state.street,
                postal: this.state.postal
            }
        };

        axios.post('/orders.json', order).finally(() => {
            this.setState({loading: false});
            this.props.history.push('/');
        });
    };



    render() {
        let form= <form onSubmit={this.orderHandler}>
            <input className="Input" type="text" name="name" placeholder="Your Name"
                   value={this.state.name} onChange={this.valueChanged}
            />
            <input className="Input" type="email" name="email" placeholder="Your Mail"
                   value={this.state.email} onChange={this.valueChanged}
            />
            <input className="Input" type="text" name="street" placeholder="Street"
                   value={this.state.street} onChange={this.valueChanged}
            />
            <input className="Input" type="text" name="postal" placeholder="Postal Code"
                   value={this.state.postal} onChange={this.valueChanged}
            />
            <Button btnType="Success">ORDER</Button>
        </form>;
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );


    }

}


export default ContactData;

