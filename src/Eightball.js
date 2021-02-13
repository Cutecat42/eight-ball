import React, {useState} from "react";

const Eightball = (props) => {
    const [answer, setAnswer] = useState("Think of a Question")
    let rand = Math.floor(Math.random()*props.answers.length);

    const handleClick = () => {
        setAnswer(props.answers[rand].msg);
        let btn = document.querySelector('button');
        btn.className=props.answers[rand].color;
    }; 

    return (
        <div>
            <button className="start" onClick={handleClick}>
                    {answer}
            </button>
        </div>
    );
};

export default Eightball;