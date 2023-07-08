export default function PageTitle({currentStepNumber}) {
    const pageTitles = [
        {title: 'Personal info', detail: 'Please provide your name, email address, and phone number.'},
        {title: 'Select your plan', detail: 'You have the option of monthly or yearly biling.'},
        {title: 'Pick add-ons', detail: 'Add-ons help enhance your gaming experience.'},
        {title: 'Finishing up', detail: 'Double-check everything looks OK before confirming.'}
    ]

    return (
        <div className="page-title">
            <h1 className="title">{pageTitles[currentStepNumber -1].title}</h1>
            <p className="title-detail">{pageTitles[currentStepNumber -1].detail}</p>
        </div>
    )
}