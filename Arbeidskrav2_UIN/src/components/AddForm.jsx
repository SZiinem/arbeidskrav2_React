//Dette er boksen på toppen der du skriver inn ting.
//Hva som skal ligge her: Input-feltene for "Vare" og "Antall", og knappen "Legg til vare".

export default function AddForm(){



    return(
        <form className="addform">
            <label htmlFor="producttitle">Vare</label>
            <input name="title" type="text" id="producttitle" placeholder="Egg.."></input>
            <label htmlFor="productquantity">Antall</label>
            <input name="quantity" type="number" id="productquantity" min="1" max="99" placeholder="2"></input>
            <button>Legg til vare</button>
        </form>
    )
}