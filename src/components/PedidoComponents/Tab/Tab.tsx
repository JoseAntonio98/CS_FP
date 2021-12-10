import React from "react";
import Address from "../Address/Address";
import Details from "../Details/Details";
import Payment from "../Payment/Payment";

const Tab: React.FC<{ currentTab: string, 
    paymentDisabled: boolean, 
    setPaymentDisabled: any,
    setCurrentTab: any,
    }> = ({currentTab, paymentDisabled, setPaymentDisabled, setCurrentTab}) => {
    
    if (currentTab === "address") 
    {
        return <Address paymentDisabled={paymentDisabled} 
            setPaymentDisabled={setPaymentDisabled}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            />
    } else if ( currentTab === "payment")
    {
        return <Payment/>
    } 
        
    return <Details/>
};

export default Tab;