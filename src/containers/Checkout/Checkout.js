import React, {Component, Fragment} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route} from "react-router-dom";


class Checkout extends Component {
    state={
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        price: 0
        };
    componentDidMount(){
      const query= new URLSearchParams(this.props.location.search);

      const ingredients={};
      let price=0;

      for(let param of query.entries()){
          if(param[0]==='price'){
            price=parseInt(param[1]);
          }else{
              ingredients[param[0]]=parseInt(param[1],10);
          }
      }
        this.setState({ingredients,price});
    }
    checkoutCanceled=()=>{
        this.props.history.goBack();
    };
    checkoutContinued=()=>{
        this.props.history.replace('/checkout/contact-data');
    };
    render() {
        return (
            <Fragment>
            <CheckoutSummary
                ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCanceled}
                checkoutContinued={this.checkoutContinued}
             />
                <Route path={this.props.match.path+'/contact-data'}
                       render={(props)=>(
                           <ContactData
                           ingredients={this.state.ingredients}
                           price={this.state.price}
                           {...props}
                           />
                       )}/>
            </Fragment>
        );
    }
}

export default Checkout;