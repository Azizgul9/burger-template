import React, {Component} from 'react';
import axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };



    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = Object.keys(response.data).map(key=>{
                    return {
                        ...response.data[key],
                        id: key
                    }
                });
                //const fetchedOrders = [];
                /*for (let key in response.data) {
                    fetchedOrders.push({...response.data[key], id: key});
                }*/
                this.setState({loading: false, orders: fetchedOrders});
            }).finally();
            /*.catch(() => {
                this.setState({loading: false});
            });*/

    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Orders;