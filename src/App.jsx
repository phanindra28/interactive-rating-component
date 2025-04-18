import "./App.css";
import {useState} from "react";
import Rating from "./components/Rating.jsx";
import ThankYou from "./components/ThankYou.jsx";

function App() {
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [selectedRating, setSelectedRating] = useState(NaN);
    return (
        <div className={"app"}>
            <div className={"card"}>
                {
                    !isSubmitClicked ?
                        <Rating setIsSubmitClicked={setIsSubmitClicked} selectedRating={selectedRating}
                                setSelectedRating={setSelectedRating}/>
                        :
                        <ThankYou selectedRating={selectedRating}/>
                }
            </div>
        </div>
    );
}

export default App;
