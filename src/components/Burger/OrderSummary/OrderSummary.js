import React, {Fragment} from 'react';
import Button from "../../UI/Button/Button";

const OrderSummary = props => {

    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
        </li>
    ));

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price} KGS</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType={"Danger"} onClick={props.purchaseCancel}>CANCEL</Button>
            <Button btnType={"Success"} onClick={props.purchaseContinue}>CONTINUE</Button>
        </Fragment>
    );
};

export default OrderSummary;