export const HeaderButton = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
    return <button className="header__button" onClick={scrollToBottom}>
        Contact
        <div >me</div>
    </button>
}