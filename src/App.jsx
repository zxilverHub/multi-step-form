import { useEffect, useState } from 'react'
import './App.css'
import { SideBar, PersonalInfo, PageTitle, SelectPlan, AddOns, ThankYou } from './index.jsx'
import FinishingUp from './components/FinishingUp'

export default function App() {
  const [currentStepNumber, setCurrentStepNumber] = useState(1)
  const [isYearly, setIsYearly] = useState(false)
  const [displayPage, setDisplayPage] = useState([true, false, false, false])
  const [isCanNext, setCanNext] = useState(false)

  const [selectedPlan, setSelectedPlan] = useState('')
  const [planAmount, setPlanAmount] = useState(0)
  const [tempAmout, setTempAmount] = useState(0)

  const [addOnsPicked, setAddOnsPicked] = useState([])
  const [confirm, setConfirm] = useState(false)

  useEffect(()=>{
    if(isYearly) setPlanAmount(tempAmout*10)
    else setPlanAmount(tempAmout)
  },[selectedPlan, isYearly])

  useEffect(()=>{
    const newDisplay = [false, false, false, false]
    newDisplay[currentStepNumber - 1] = true;
    setDisplayPage(newDisplay)
  }, [currentStepNumber])

  const nextPage =()=> {
    if(isCanNext) {
      setCurrentStepNumber(currentStepNumber + 1)
    }
  }

  const backPage =()=> setCurrentStepNumber(currentStepNumber - 1)
  const settingCanNext = (is)=> setCanNext(is)
  const settingPlan = (pl, amt)=> {
    setSelectedPlan(pl)
    setTempAmount(amt)
  }
  const isYearlyToggle = ()=> setIsYearly(!isYearly)
  const seetingAddOnsPicked = (nArr)=> setAddOnsPicked(nArr)

  return (
    <div className="container">
      <SideBar currentStepNumber={currentStepNumber} />
      
        <div className="forms">
        { !confirm ?
          <>
            <PageTitle currentStepNumber={currentStepNumber} />
            <PersonalInfo displayPage={displayPage[0]} settingCanNext={settingCanNext}/>
            <SelectPlan displayPage={displayPage[1]} isYearly={isYearly} settingPlan={settingPlan} isYearlyToggle={isYearlyToggle} settingCanNext={settingCanNext}/>
            <AddOns displayPage={displayPage[2]} isYearly={isYearly} seetingAddOnsPicked={seetingAddOnsPicked} />
            <FinishingUp displayPage={displayPage[3]} isYearly={isYearly} planAmount={planAmount} addOnsPicked={addOnsPicked} selectedPlan={selectedPlan} isYearlyToggle={isYearlyToggle} />

            <div className="page-button">
              <button 
                className={`back-btn ${(currentStepNumber > 1 ? 'scale': '')}`}
                onClick={backPage}
              >Go Back</button>
              { currentStepNumber <=3 ?
              <button 
                className={`next-btn ${(currentStepNumber <= 3? '': 'final')}`}
                onClick={nextPage}
              >Next Step</button> :
              <button className='confirm' onClick={()=>{setConfirm(true)}}>Confirm</button>
              }
            </div>
          </> :
          <ThankYou/>
        }
        </div> 
       
    </div>
  )
}

