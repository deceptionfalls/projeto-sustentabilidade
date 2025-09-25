export default function Statistics({ statNumber, statName }) {
    return (
        <div>
            <p className="text-3xl font-montserrat font-bold">{statNumber}</p>
            <p className="text-xs font-montserrat font-semibold">{statName}</p>
        </div>
    )
}