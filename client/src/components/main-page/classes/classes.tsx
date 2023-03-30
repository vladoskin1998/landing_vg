import { HeaderList } from "../header/headerList"
import { ClassesPhoto } from "./classesPhoto"
import { CLASSES_TEXT as textList} from '../../../utils/const'

const Classes = () => {
    return <div className="classes" id="Classes">
        <h4 className="title__links">Classes</h4>
        <div className="classes__area">
            <div className="classes__area-list">
                <h4 className="title__links">Coaching Experience</h4>
                <HeaderList textList={textList} />
            </div>
            <ClassesPhoto />
        </div>
    </div>
}

export default Classes


