import React,{useEffect, useState} from "react";
// import "./invoivce.css"
import PdfTemplate from "./template"

const Invoice=()=>{

    const [InvoiceNumber,setInvoiceNumber]=useState("");
    const [Dates,setDates]=useState("");
    const [view,setView]=useState(true);

    useEffect(()=>{
        const current= new Date();
        const date=`${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`
        setDates(date);
    },[])

    const create=()=>{
        setView(false);
    }

    return(
        <>
        {
        view?
        <div className="container">
            <div className="form">
                <div className="inputs">
                    <input type="text" placeholder="Invoice number"value={InvoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)} />
                </div>
                <div className="buttons">
    <button onClick={create}>Create</button>
                </div>
            </div>
    
        </div>
        :<PdfTemplate InvoiceNumber={InvoiceNumber} date={Dates}/>
         }
        </>
    )
    };
    export default Invoice;