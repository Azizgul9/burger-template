import React, {Component, Fragment} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES={
    salad: 5,
    cheese: 20,
    meat: 50,
    bacon: 30
};

class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20,
        purchaseble:false,
        purchasing:false
    };

    addIngredient = type =>{
      const oldCount = this.state.ingredients[type];
      const updateCount = oldCount + 1;
      const updatedIngredients={...this.state.ingredients};
      updatedIngredients[type]=updateCount;

      const priceAddition=INGREDIENT_PRICES[type];
      const oldPrice=this.state.totalPrice;
      const newPrice=oldPrice+priceAddition;

      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
      this.updatePurchaseState(updatedIngredients);
    };

    removeIngredient = type =>{
        const oldCount = this.state.ingredients[type];

        if(oldCount===0) return;


        const updateCount = oldCount - 1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updateCount;

        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState=ingredients=>{
       const sum=Object.values(ingredients)
           //Object.keys(ingredients)
           //.map(igKey=>ingredients[key])
           .reduce((sum,el)=>sum+el,0);

        this.setState({purchaseble: sum>0});
    };

    purchase=()=>{
       this.setState({purchasing: true});
    };
    purchaseCancel=()=>{
        this.setState({purchasing:false});
    };
    purchaseContinue=()=>{
        alert('You are continued!');
    };
  render() {
      const disabledInfo={...this.state.Ingredients};

      for(const key in disabledInfo){
          disabledInfo[key]=disabledInfo[key]===0;
      }

    return (
      <Fragment>
         <Modal
             close={this.purchaseCancel}
             show={this.state.purchasing}>
             <OrderSummary
             ingredients={this.state.ingredients}
             price={this.state.totalPrice}
             purchaseCansel={this.purchaseCancel}
             purchaseContinue={this.purchaseContinue}
             />
         </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
            purchase={this.purchase}
            ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient}
            price={this.state.totalPrice}
            disabledInfo={disabledInfo}
            purchaseble={this.state.purchaseble}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder;
