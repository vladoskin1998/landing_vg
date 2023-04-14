export const FestivalPhotoList = () => {
    return <div className="festival__area-list">
        {
            [1, 2, 3, 4, 5, 6].map(it => <div key={`festival__area-list_${it}`} className={`festival__area-list_${it} about__born-image`} />)
        }

    </div>
}

export default FestivalPhotoList