//Dette er selve rammen rundt listen din.

//Hva som skal ligge her: En <ul> (punktliste) som går igjennom varene dine.

import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({shoppingItems, updateQuantity, toggleComplete}){

    return(
        <ul className="shopping-list">
            {shoppingItems.map((item) => 
                <ShoppingItem 
                    key={item.id} 
                    {...item} //sender title, quantity, id og isCompleted
                    updateQuantity={updateQuantity} 
                    toggleComplete={toggleComplete}
                />
                )
            }
        </ul>
    )
}
