export const Statistic = ({total, bad, good, neutral , percent}) =>{
    return (
        <ul className="stats-list">
                    <li className="stats-item">
                        Good:
                        <span className="stats-span">{good}</span>
                    </li>
                    <li className="stats-item">
                        Neutral:
                        <span className="stats-span">{neutral}</span>
                    </li>
                    <li className="stats-item">
                        Bad:
                        <span className="stats-span">{bad}</span>
                    </li>
                    <li className="stats-item">
                        Total:
                        <span className="stats-span">{total}</span>
                    </li>
                    <li className="stats-item">
                        Positive feedback:
                        <span className="stats-span">{percent.toFixed(0)}%</span>
                    </li>
                </ul>
    )
}