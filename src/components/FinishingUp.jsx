import { useEffect, useState } from "react"

export default function FinishingUp({displayPage, isYearly, planAmount, addOnsPicked, selectedPlan, isYearlyToggle}) {

    const [extender, setExtender] = useState((isYearly? 'yr':'mo'))
    const [totalAmount, setTotalAmount] = useState(planAmount)

    useEffect(()=>{
        setExtender((isYearly? 'yr':'mo'))
        calculateTotal()
    }, [isYearly, addOnsPicked, planAmount])

    const addOnsObject = [
        {addOnsName: 'Online service', addOnsAmount: 1},
        {addOnsName: 'Larger storage', addOnsAmount: 2},
        {addOnsName: 'Costumizable profile', addOnsAmount: 2},
    ]

    const calculateTotal = ()=> {
        let tempTotal = 0;
        addOnsPicked.map((adds, i)=>{
            if(adds) {
                tempTotal+=addOnsObject[i].addOnsAmount;
            }
        })
        setTotalAmount(planAmount+(isYearly? tempTotal*10 : tempTotal))
    }

    return (
        <div className={`finishin-up ${(displayPage? 'flex':'none')}`}>
            <div className="reciept-infos">
                <div className="level-infos">
                    <div className="level-text">
                        <h2 className="level-name">{selectedPlan} ({(isYearly ? 'Yearly': 'Monthly')})</h2>
                        <p className="change" onClick={isYearlyToggle}>Change</p>
                    </div>
                    <p className="plan-amount">${planAmount}/{extender}</p>
                </div>
                <hr />
                <div className="add-ons-infos">
                    {addOnsPicked.map((adds, i)=>(
                        adds && 
                        <div className="add-ons-list" key={i}>
                            <p className="add-ons-name">{addOnsObject[i].addOnsName}</p>
                            <p className="add-ons-amount">+${(isYearly? addOnsObject[i].addOnsAmount*10 : addOnsObject[i].addOnsAmount)}/{extender}</p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="total-amount">
                <p className="total-text">Total (per {(isYearly? 'year': 'month')})</p>
                <p className="total">+${totalAmount}/{extender}</p>
            </div>
        </div>
    )
}

