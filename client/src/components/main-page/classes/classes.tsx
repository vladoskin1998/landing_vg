import { HeaderList } from "../header/headerList"
import { CLASSES_TEXT as textList} from '../../../utils/const'
import { lazy,Suspense } from "react"
import { Loader } from "../../loader/loader";
import '../../../style/main-page/classes.scss';

const ClassesPhoto = lazy(() => import("./classesPhoto"));

const Classes = () => {
    return    <Suspense fallback={<Loader />}>
        <div className="classes" id="Classes">
        <h4 className="title__links">Classes</h4>
        <div className="classes__area">
            <div className="classes__area-list">
                <h4 className="title__links">Coaching Experience</h4>
                <HeaderList textList={textList} />
            </div>
            <ClassesPhoto />
        </div>
    </div>
    </Suspense>
    
}

export default Classes


