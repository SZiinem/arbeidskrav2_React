//Dette er selve rammen rundt listen din.

//Hva som skal ligge her: En <ul> (punktliste) som går igjennom varene dine.

import ShoppingItem from "./ShoppingItem"

export default function ShoppingList(){

    return(
        <ul className="shopping-list">
            <ShoppingItem name="Melk" quantity="1" />
            <ShoppingItem name="Egg" quantity="2" />
        </ul>
    )
}