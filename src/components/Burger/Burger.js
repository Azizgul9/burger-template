import React from 'react';
import './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const Burger = ({ingredients}) => {
    let ingredientComponents=[];

    //2# Stal obektom
    Object.keys(ingredients).forEach(ingredientName=>{
        const ingredientCount=ingredients[ingredientName];
        for(let i=0;i<ingredientCount;i++){
            ingredientComponents.push(<Ingredient key={ingredientName+i} type={ingredientName}/>);
        }
    });

    if(ingredientComponents.length===0){
        ingredientComponents=<p>Please start adding components!</p>;
    }

    //1# Byl massiv
    /*for (const ingredientName in ingredients){
        const ingredientCount=ingredients[ingredientName];

        for(let i=0;i<ingredientCount;i++){
            ingredientComponents.push(<Ingredient key={ingredientName+i} type={ingredientName}/>);
        }
    }*/

    return(
        <div className={"Burger"}>
            <Ingredient type={"bread-top"} />

           {/* <Ingredient type={"meat"} />
            <Ingredient type={"cheese"} />
            <Ingredient type={"salad"} />
            <Ingredient type={"bacon"} />*/}
            {ingredientComponents}

            <Ingredient type={"bread-bottom"} />
        </div>
    );
};

export default Burger;