//Dette er selve rammen rundt listen din.

//Hva som skal ligge her: En <ul> (punktliste) som går igjennom varene dine.

import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({shoppingItems}){

    return(
        <ul className="shopping-list">
            {shoppingItems.map((item) => <ShoppingItem key={item.id} title={item.title} quantity={item.quantity} id={item.id}/>)}
        </ul>
    )
}