import { useEffect, useState } from "react";

export default function PersonalInfo({displayPage, settingCanNext}) {
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [err, setErr] = useState([])

    useEffect(()=>{
        setErr([!userName, !email, !phoneNumber])
        if((!userName && !email && !phoneNumber) && email!==null && phoneNumber!==null ) {
            settingCanNext(true)
        } else settingCanNext(false)
    },[userName, email, phoneNumber])

    const getPersonalInfo = (e)=> {
        const id = e.target.id;
        const info = e.target.value;
        validation(id, info)
    }

    const checkOnBlur = (e)=> {
        const id = e.target.id;
        const info = e.target.value;
        if(id === 'name') {
            info===''? setUserName(true) : setUserName(false) }
        else if(id === 'email') validation(id, info)
        else if(id === 'phone-number') validation(id, info)
    }

    const validation =(id, info)=> {
        if(id === 'name') {
            info === '' ? setUserName(true) : setUserName(false)
        } else if(id === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const ok = emailRegex.test(info)
            setEmail(!ok)
        } else if(id === 'phone-number') {
            const phoneRegex = /^\+\d[\d\s]*$/;
            const okN = phoneRegex.test(info)
            setPhoneNumber(!okN)
        }
    }

    return (
        <div className={`personal-info ${(displayPage? 'flex': 'none')}`}>
            <div className="inputs">
                <div className="label">
                    <p className="label-title">Name</p>
                    <p className={`error-input ${(err[0]? 'none': 'block')}`}>Please provide name</p>
                </div>
                <input type="text" id="name" placeholder="e.g. Stephen King" autoComplete="off"
                    onChange={getPersonalInfo}
                    onBlur={checkOnBlur}
                    className={(err[0]? '': 'err-input')}
                />
            </div>

            <div className="inputs">
                <div className="label">
                    <p className="label-title">Email Address</p>
                    <p className={`error-input ${(err[1]? 'none': 'block')}`}>Invalid email address</p>
                </div>
                <input type="email"  id="email" placeholder="e.g. Stephenking@lorem.com" autoComplete="off" 
                    onChange={getPersonalInfo}
                    className={(err[1]? '': 'err-input')}
                    onBlur={checkOnBlur}
                />
            </div>

            <div className="inputs ">
                <div className="label">
                    <p className="label-title">Phone Number</p>
                    <p className={`error-input ${(err[2]? 'none': 'block')}`}>This field is required</p>
                </div>
                <input type="text"  id="phone-number" placeholder="e.g. +1 234 567 890" autoComplete="off" 
                    onChange={getPersonalInfo}
                    onBlur={checkOnBlur}
                    className={(err[2]? '': 'err-input')}
                />
            </div>
        </div>
    )
}