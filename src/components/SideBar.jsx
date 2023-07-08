import '../App.css'

export default function SideBar({currentStepNumber}) {
    const steps = ['your info', 'select plan', 'add-ons', 'summary']

    return (
        <div className="sidebar">
            {steps.map((step, i)=>(
                <div className="step" key={i}>
                    <div className={`steps-page-indecator ${(currentStepNumber === i+1 ? 'currentPage' : '')}`}>{i+1}</div>
                    <div className="step-page-title">
                        <p className='step-page-eyebrow'>step {i+1}</p>
                        <p className='step-page-title'>{step}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}