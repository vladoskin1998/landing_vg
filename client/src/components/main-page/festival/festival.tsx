import { lazy, Suspense } from "react";
import { Loader } from "../../loader/loader";
import '../../../style/main-page/festival.scss';

const FestivalPhotoList = lazy(() => import("./festivalPhotoList"));

const Festival = () => {

    return <Suspense fallback={<Loader />}>
        <div className="festival about__born-image" id="Festival & TV">
            <h4 className="title__links">Festival & TV</h4>
            <div className="festival__area">
                <div className="festival__area-text">
                    <p>Veronika Goroshkova was selected to perform on the prestigious Festival Mondial du Cirque de Demain in Paris in 2020.
                        Prix Du Cirque Phenix.
                    </p>
                    <p>Participant La Merce-Mac Festival in Barcelona, Spain in 2020.
                    </p>
                    <p>Participant TV show “Superintuition” in Kiev, Ukraine in 2020</p>
                </div>
                <div className="festival__photo about__born-image"></div>
                <FestivalPhotoList />
            </div>
        </div>
        <div className="festival__bg-list"></div>
    </Suspense>
}

export default Festival