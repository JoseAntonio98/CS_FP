import React from "react";
import Address from "../Address/Address";
import Details from "../Details/Details";
import Payment from "../Payment/Payment";

const Tab: React.FC<{ currentTab: string }> = ({currentTab}) => {
    // const tab: string = "details";
    
    if (currentTab === "address") 
    {
        return <Address/>
    } else if ( currentTab === "payment")
    {
        return <Payment/>
    } 
        
    return <Details/>
};

export default Tab;