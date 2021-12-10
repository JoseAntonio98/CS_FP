import React from "react";
import Card from "../Card/Card";
import Cash from "../Cash/Cash";

const Input: React.FC<{ paymentMode: string }> = ({paymentMode}) => {
    
    if (paymentMode === "cash") 
    {
        return <Cash/>
    } else {
        return <Card/>
    }
        
};

export default Input;