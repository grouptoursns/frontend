import React from "react"
import "./searchBtn.css";


const SearchBtn =()=>{
    return(
        <div className="serach-btn">
            <button    type="button" className="button all" >All</button>
            <button    type="button" className="button">Tours</button>
            <button    type="button" className="button">Actvities</button>
            <button    type="button" className="button rent">Rentals</button>

        </div>
    )
}
export default SearchBtn;

