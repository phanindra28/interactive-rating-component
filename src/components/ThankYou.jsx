import ThankYouImg from "../../images/illustration-thank-you.svg";

const ThankYou = ({selectedRating}) => {
    return (
        <div className={"thank-you-container"}>
            <img src={ThankYouImg} alt="Star icon"/>
            <div className={"thank-you-rating"}>
                You selected {selectedRating} out of 5
            </div>
            <h1>Thank you!</h1>

            <p className={"description"}>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}

export default ThankYou