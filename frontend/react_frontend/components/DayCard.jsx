export default function DayCard(props) {
    const day = props.dayInfo;

    return(
        <div className="dayCardContainer">
            <div className="dayCardHeader">
                {day.emotion}<br/>
                {day.timestamp.slice(0, 10)}
            </div>
            <p>{day.description}</p>
        </div>
    )
}