export const FestivalPhotoList = () => <div className='festival__area-list'>
	{
		[1, 2, 3, 4, 5, 6].map(it => <div key={`festival__area-list_${it}`} className={`festival__area-list_${it} main--image`} />)
	}

</div>;

export default FestivalPhotoList;
