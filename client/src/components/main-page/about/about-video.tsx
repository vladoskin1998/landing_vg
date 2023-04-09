export const AboutVideo = () => {
    return <video
        className="about__vg-video"
        preload="auto"
        autoPlay
        loop
        playsInline
        muted
    >
        <source src="./Videos/about.mp4" type="video/mp4" />
    </video>
}

export default AboutVideo