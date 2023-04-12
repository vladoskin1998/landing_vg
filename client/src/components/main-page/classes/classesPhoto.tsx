export const ClassesPhoto = () => {

    return <>
        {
            (new Array(10)).fill(1).
                map((e, index) => <div className={`classes__area_p${index + 1} about__born-image`} key={index + "classes__area_p"} />)
        }
    </>
}

export default ClassesPhoto