function Score({ score }) {
    //console.log(score);
    if (!score) return null
    const { date, score:scoreValue } = score
    
    return (
         <li>
            Date: {date}, Score: {scoreValue}
        </li>
    )
}

export default Score;