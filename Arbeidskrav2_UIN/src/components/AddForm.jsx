//Dette er boksen på toppen der du skriver inn ting.
//Hva som skal ligge her: Input-feltene for "Vare" og "Antall", og knappen "Legg til vare".
import { useState } from 'react';

export default function AddForm({product, setProduct, setShoppingList}){

    const [error, setError] = useState("");

    const handleChange = (e)=>{
        const {name, value} = e.target

        setProduct((prev) => ({...prev, [name]:value}))
        setError("")
    }

    const handleClick = (e) =>{
        e.preventDefault()

        //sjekker om begge mangler
        if (!product.title && !product.quantity){
            setError("Du må fylle ut både varenavn og antall!")
            return;
        }
        //sjekker om bare varenavn mangler
        else if (!product.title){
            setError("Du må fylle ut varenavn!")
            return;
        }
        //sjekker om bare antall mangler
        else if (!product.quantity){
            setError("Du må fylle ut antall!")
            return;
        }

        const uniqueId = crypto.randomUUID()
        setShoppingList((prev) => ([...prev, {id: uniqueId, ...product}]))
        console.log(product)
        //setProduct({title: "", quantity: 1}); //nulstiller staten
    }

    return(
        <form className="addform" onSubmit={handleClick}>
            {
                error ? (<p className="error-message">{error}</p>) : (null)
            }
            <label htmlFor="producttitle">Vare</label>
            <input name="title" type="text" id="producttitle" placeholder="Egg.." onChange={handleChange}></input>
            <label htmlFor="productquantity">Antall</label>
            <input name="quantity" type="number" id="productquantity" min="1" max="99" placeholder="2" onChange={handleChange}></input>
            <button>Legg til vare</button>
        </form>
    )
}