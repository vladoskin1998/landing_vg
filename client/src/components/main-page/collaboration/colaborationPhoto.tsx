export const ColaborationPhoto = () => {
    return <div className="collaboration__area1-photo">
        {
            (new Array(6)).fill(1)
                .map((e, index) => <div className={`collaboration__area1-photo-${index + 1} about__born-image`} key={"collaboration__area1-photo" + index} />)
        }
    </div>
}