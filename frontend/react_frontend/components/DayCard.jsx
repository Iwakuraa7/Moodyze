export default function DayCard(day) {
    return(
        <div>
            <p>{day.timestamp.slice(0, 10)}</p>
            <p>{day.emotion}</p>
            <p>{day.description}</p>            
        </div>
    )
}