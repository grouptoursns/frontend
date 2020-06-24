import React,{useState} from "react"
import "./searchBtn.css";



const SearchBtn =()=>{
    const [active,setActive] = useState('');
    const handleClick=(event)=>{
        setActive(event.target.id);
    }

    return(
        <div className="serach-btn">
            <button    type="button" id="1" className={"button all"+ (active ==="1" ? " al1":'' )} onClick={handleClick} >All</button>
            <button    type="button" id="2" className={"button "+ (active ==="2" ? " al1":'' )} onClick={handleClick}>Tours</button>
            <button    type="button" id="3" className={"button "+ (active ==="3" ? " al1":'' )} onClick={handleClick}>Actvities</button>
            <button    type="button" id="4" className={"button rent"+ (active ==="4" ? " al1":'' )} onClick={handleClick}>Rentals</button>

        </div>
    )
}
export default SearchBtn;



