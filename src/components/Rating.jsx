import StarIcon from "../../images/icon-star.svg";

const Rating = (props) => {
    const { setIsSubmitClicked, selectedRating, setSelectedRating } = props;
    return (
        <>
            <span className={"star"}>
              <img src={StarIcon} alt="Star icon" />
            </span>
            <h1 className={"title"}>How did we do?</h1>
            <p className={"description"}>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <div className={"rating-container"}>
                <div className={`rating ${selectedRating === 1 ? 'active' : ""}`} onClick={() => setSelectedRating(1)}>1</div>
                <div className={`rating ${selectedRating === 2 ? 'active' : ""}`} onClick={() => setSelectedRating(2)}>2</div>
                <div className={`rating ${selectedRating === 3 ? 'active' : ""}`} onClick={() => setSelectedRating(3)}>3</div>
                <div className={`rating ${selectedRating === 4 ? 'active' : ""}`} onClick={() => setSelectedRating(4)}>4</div>
                <div className={`rating ${selectedRating === 5 ? 'active' : ""}`} onClick={() => setSelectedRating(5)}>5</div>
            </div>
            <button
                className={"submit"}
                onClick={() => {
                    selectedRating && setIsSubmitClicked(true);
                }}
            >
                SUBMIT
            </button>
        </>
    )
}

export default Rating;