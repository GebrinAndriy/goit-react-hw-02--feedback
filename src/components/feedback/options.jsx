export const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return(
        <ul className="list">
            {options.map((option)=>{
                return (
                    <li className="item" key={option}>
                        <button className="btn" onClick={() => onLeaveFeedback(option)}>{option}</button>
                    </li>
                )
            })}
        </ul>
    )
}