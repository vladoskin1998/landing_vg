export const ClassesPhoto = () => <>
	{
		(new Array(10)).fill(1)
			.map((e, index) => <div className={`classes__area_p${index + 1} main--image`} key={index + 'classes__area_p'} />)
	}
</>;

export default ClassesPhoto;
