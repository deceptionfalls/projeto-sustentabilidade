export default function Statistics({ statNumber, statName }) {
    return (
        <div>
            <p className="text-4xl font-montserrat font-bold">{statNumber}</p>
            <p className="text-4x1 font-montserrat font-semibold">{statName}</p>
        </div>
    )
}