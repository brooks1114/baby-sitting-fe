export default function CloseIcon({handleClickClose}) {
    return (
        <button onClick={handleClickClose} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    )
}