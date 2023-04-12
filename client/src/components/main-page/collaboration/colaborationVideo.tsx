export const ColaborationVideo = () => {
    return <div className="collaboration__area2-video">
    <div className="collaboration__area2-video-1">
        <video
            controls
            playsInline
            muted
        >
            <source src="./Videos/coll_1.mp4" type="video/mp4" />
        </video>

    </div>
    <div className="collaboration__area2-video-2">
        <video

            controls
            playsInline
            muted
        >
            <source src="./Videos/coll_2.mp4" type="video/mp4" />
        </video>
    </div>
    <div className="collaboration__area2-video-3">
        <video
            controls
            playsInline
            muted
        >
            <source src="./Videos/coll_3.mp4" type="video/mp4" />
        </video>
    </div>
    <div className="collaboration__area2-video-4">
        <video
            controls
            playsInline
            muted
        >
            <source src="./Videos/coll_4.mp4" type="video/mp4" />
        </video>
    </div>
</div>
}

export default ColaborationVideo