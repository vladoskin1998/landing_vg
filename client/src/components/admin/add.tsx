import { useState } from "react";
import { $adminApi } from "../../api/api";

export const AddNew = ({ close, link }: { close: () => void, link: string }) => {

    const [showList, setShowList] = useState(false)
    const [files, setFiles] = useState<File[]>([]);

    const handleFileUpload = (e: any) => {
        setFiles(e.target.files);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`files`, files[i]);
        }
        try {
            await $adminApi.post('folder-photo', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            close()
        } catch (error) {
            console.error(error);
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
            <input type="text" className="login__input" />
            <label htmlFor="file-upload" className="media--add add__label">
                Download file
            </label>
            <input type="file" multiple accept=".jpg,.jpeg,.png,.mp3,.mp4" id="file-upload" onChange={(e) => {
                setShowList(true)
                handleFileUpload(e)
            }} />
            {showList && (
                <>
                    <h4 className="login__text">.jpg,.jpeg,.png,.mp3,.mp4</h4>
                    <ul>
                        {Array.from(files).map((file, index) => (
                            <li key={file.name}>
                                <div>
                                    <span>{
                                        `${file.name}/${file.size}`.length > 25
                                            ? `${file.name}/${file.size}`.split('').slice(0, 25).join('') + "..."
                                            : `${file.name}/${file.size}`} bite</span>
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
