import { useState } from "react"
import { arcadeIcon, advancedIcon, proIcon } from "../index.jsx"

export default function SelectPlan({displayPage,isYearly, settingPlan, isYearlyToggle, settingCanNext}) {
    const [plans, setPlans] = useState([])
    
    const selecting=(i, val, ampt)=> {
        const newPlan = [false, false, false]
        newPlan[i] = true;
        setPlans(newPlan)
        settingPlan(val, ampt)
        settingCanNext(true)
    }

    return (
        <div className={`select-plan ${(displayPage? 'flex':'none')}`}>
            <div className="levels">
                <div className={`level-card ${(plans[0] ? 'selectedPlan':'')}`}
                    onClick={()=>selecting(0, 'Arcade', 9)}
                >
                    <img src={arcadeIcon} alt="Arcade icon" />
                    <div className="level-info">
                        <p className="level">Arcade</p>
                        <p className="level-amount">{(isYearly? '$90/yr' : '$9/mo')}</p>
                        {isYearly && <p className="free">2 months free</p> }
                    </div>
                </div>

                <div className={`level-card ${(plans[1] ? 'selectedPlan':'')}`}
                    onClick={()=>selecting(1, 'Advanced', 12)}
                >
                    <img src={advancedIcon} alt="Advanced icon" />
                    <div className="level-info">
                        <p className="level">Advanecd</p>
                        <p className="level-amount">{(isYearly? '$120/yr' : '$12/mo')}</p>
                        {isYearly && <p className="free">2 months free</p> }
                    </div>
                </div>

                <div className={`level-card ${(plans[2] ? 'selectedPlan':'')}`}
                    onClick={()=>selecting(2, 'Pro', 15)}
                >
                    <img src={proIcon} alt="Pro icon" />
                    <div className="level-info">
                        <p className="level">Pro</p>
                        <p className="level-amount">{(isYearly? '$150/yr' : '$15/mo')}</p>
                        {isYearly && <p className="free">2 months free</p> }
                    </div>
                </div>
            </div>
            <div className="plan-toggle">
                <p className={`monthly-label ${(isYearly? '': 'bold')}`}>Monthly</p>
                <div className="toggle" onClick={isYearlyToggle}>
                    <div className={`toggle-btn ${(isYearly? 'right':'left')}`}></div>
                </div>
                <p className={`yearly-label ${(!isYearly? '': 'bold')}`}>Yearly</p>
            </div>
        </div>
    )
}