import { useEffect, useRef, useState } from "react"

export default function AddOns({displayPage, isYearly, seetingAddOnsPicked}) {
    const [onlineService, setOnlineService] = useState(false)
    const [storage, setStorage] = useState(false)
    const [profile, setProfile] = useState(false)
    const olSvrRef = useRef()
    const storageRef = useRef()
    const profileRef = useRef()

    useEffect(()=>{
        setPicks()
        seetingAddOnsPicked([onlineService, storage, profile])
    }, [onlineService, storage, profile])

    const setPicks =()=>{
        onlineService ? olSvrRef.current.checked = true : olSvrRef.current.checked = false
        storage ? storageRef.current.checked = true : storageRef.current.checked = false
        profile ? profileRef.current.checked = true : profileRef.current.checked = false
    }

    const pickAddOns=(ref)=>{
        if(ref==='olService') setOnlineService(prevState=>!prevState)
        else if(ref==='storage') setStorage(prevState=>!prevState)
        else if(ref==='profile') setProfile(prevState=>!prevState)
    }

    return (
        <div className={`add-ons ${(displayPage? 'flex':'none')}`}>
            <div className={`service ${(onlineService? 'selectedPlan':'')}`} onClick={()=>{pickAddOns('olService')}}>
                <div className="service-input">
                    <input type="checkbox" id="online-service" ref={olSvrRef} />
                    <div className="service-label">
                        <p className="service-name">Online service</p>
                        <p className="service-info">Access to multiplayer games</p>
                    </div>
                </div>
                <p className="service-amount">{(isYearly ? '+$10/yr' : '+$1/mo')}</p>
            </div>

            <div className={`service ${(storage? 'selectedPlan':'')}`} onClick={()=>{pickAddOns('storage')}}>
                <div className="service-input" >
                    <input type="checkbox" id="larger-storage" ref={storageRef} />
                    <div className="service-label">
                        <p className="service-name">larger storage</p>
                        <p className="service-info">Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p className="service-amount">{(isYearly ? '+$20/yr' : '+$2/mo')}</p>
            </div>

            <div className={`service ${(profile? 'selectedPlan':'')}`} onClick={()=>{pickAddOns('profile')}}>
                <div className="service-input" >
                    <input type="checkbox" id="customizable-profile" ref={profileRef} />
                    <div className="service-label">
                        <p className="service-name">Customizable profile</p>
                        <p className="service-info">Custom theme on your profile</p>
                    </div>
                </div>
                <p className="service-amount">{(isYearly ? '+$20/yr' : '+$2/mo')}</p>
            </div>

        </div>
    )
}


