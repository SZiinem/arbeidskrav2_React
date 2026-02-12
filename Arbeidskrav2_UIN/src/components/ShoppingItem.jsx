//Dette er én enkelt linje i listen din.

//Hva som ligger her: Navnet på varen, en checkbox og tallet for antall.

export default function ShoppingItem({title, quantity, id, isCompleted, updateQuantity, toggleComplete}){

    //dette er funksjonen for å endre antall varer i lista
    const handleQuantityChange = (e) => {
        //vi bruker parseInt fordi input felt ser det som string selvom type er number.
        const val = parseInt(e.target.value);
        updateQuantity(id, val); //id: hvilken vare som skal endres, val: det nye antallet
    }


    return(
        <li className="shopping-item">
            {/*Checkbox*/}
            <input type="checkbox" checked={isCompleted} onChange={() => toggleComplete(id)}></input>

            {/*Navnet på varen*/}     
            <span>{title}</span>

            {/*Antall varer*/}  
            <input className="antall" type="number" value={quantity} min="1" max="99" onChange={handleQuantityChange}></input>          
        </li>
    )
}