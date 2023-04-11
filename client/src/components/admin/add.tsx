import { useState, useContext } from "react";
import { AppContext } from "../../context/context"
import { $api } from "../../api/api";
import { MediaEnumFile } from "../../types/types-main";
import { AxiosError } from 'axios';
const dataUpload = (key: string): { format: string, tag: MediaEnumFile.PHOTO | MediaEnumFile.VIDEO } => {
    switch (key) {
        case "folder-photo":
            return { format: '.jpg,.jpeg,.png', tag: MediaEnumFile.PHOTO }
        case "folder-video":
            return { format: '.mp4', tag: MediaEnumFile.VIDEO }
        default:
            return { format: '.jpg,.jpeg,.png', tag: MediaEnumFile.PHOTO }
    }
}
export const AddNew = ({ close, link }: { close: () => void, link: string }) => {

    const [showList, setShowList] = useState(false)
    const [files, setFiles] = useState<File[]>([]);
    const [bgFiles, setBgFiles] = useState<File[]>([]);
    const [folder, setFolder] = useState('')
    const { setIsAuth } = useContext(AppContext)
    const { format, tag } = dataUpload(link)

    const handleFileUpload = (e: any) => {
        setFiles(e.target.files);
    };

    const handleBgFileUpload = (e: any) => {
        setBgFiles(e.target.files);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        if (!folder) {
            return alert('Required field input folder')
        }
        if (!bgFiles.length) {
            return alert('Required field Background file')
        }
        if (!files.length) {
            return alert('Required field Download file')
        }
        formData.append('title', folder);
        formData.append('tag', tag);
        formData.append('bgfiles', bgFiles[0]);
        for (let i = 0; i < files.length; i++) {
            formData.append(`files`, files[i]);
        }
        try {
            await $api.post('media/add-folder', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            alert("Success upload")
            close()
        } catch (error: any) {
            console.log(error);
            if (error?.response?.status === 401) {
                setIsAuth('')
            }
            alert(error)
        }
    };



    const handleFileDelete = (i: number) => {
        setFiles(
            Array.from(files).filter((el, index) => index !== i)
        )
    }

    return (
        <div className="login add">
            <h4 className="login__text">Add Collection</h4>
            <div>
                <h4 className="login__text">FOLDER</h4>
                <input type="text" className="login__input" value={folder} onChange={e => setFolder(e.target.value)} />
                <h4 className="login__text login__text-req">Required field</h4>
            </div>


            <label htmlFor="file-bgupload" className="media--add add__label">
                Background file
            </label>
            <input type="file" accept={'.jpg,.jpeg,.png'} id="file-bgupload" onChange={(e) => {
                setShowList(true)
                handleBgFileUpload(e)
            }} />
            <h4 className="login__text">{'.jpg,.jpeg,.png'}    <span className="login__text login__text-req">Required field</span></h4>


            <label htmlFor="file-upload" className="media--add add__label">
                Download files
            </label>
            <input type="file" multiple accept={format} id="file-upload" onChange={(e) => {
                setShowList(true)
                handleFileUpload(e)
            }} />
            <h4 className="login__text">{format} <span className="login__text login__text-req">Required field</span></h4>

            {showList && (
                <>
                    <ul>
                        {Array.from(files).map((file, index) => (
                            <li key={file.name}>
                                <div>
                                    <span>{
                                        `${file.name}/${file.size}`.length > 25
                                            ? `${file.name}`.split('').slice(0, 25).join('') + "..."
                                            : `${file.name}`}</span>
                                </div>
                                <button className="add__del" onClick={(e) => handleFileDelete(index)}>Delete</button>

                            </li>
                        ))}
                    </ul>
                </>
            )}
            <div className="login__nav">
                <button className="media__item--delete" onClick={close}>
                    Cancel
                </button>
                <button className="media--add" onClick={handleUpload}>Upload To Server</button>
            </div>
        </div>
    );
}
