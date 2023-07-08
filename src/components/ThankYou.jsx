import { thankIcon } from "../index.jsx"

export default function ThankYou() {
    return (
        <div className="thank-you">
            <img src={thankIcon} alt="thank-you icon" />
            <div className="thank-you-text">
                <h3>Thank you!</h3>
                <p className="ty-sub">Thanks for confirming your subscription! We hope you have fun using our platforn. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}