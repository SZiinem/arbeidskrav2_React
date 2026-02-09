//Dette er én enkelt linje i listen din.

//Hva som ligger her: Navnet på varen, en checkbox og tallet for antall.

export default function ShoppingItem({title, quantity}){


    return(
        <li className="shopping-item">
            {/*Checkbox*/}
            <input type="checkbox" id="kjopt" name="kjopt"></input>

            {/*Navnet på varen*/}     
            <span>{title}</span>

            {/*Antall varer*/}  
            <input className="antall" type="number" value={quantity} min="1" max="99" onChange={() => {}}></input>          
        </li>
    )
}