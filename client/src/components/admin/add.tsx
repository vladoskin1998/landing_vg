import { useState, useEffect } from "react";

type FileList = {
    name: string;
    size: number;
    type: string;
    url: string;
}[];

export const AddNew = ({ close }: { close: () => void }) => {

    const [files, setFiles] = useState<FileList>([]);
    const [showList, setShowList] = useState<boolean>(false);

    console.log(
        'files', files
    );


    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileList = event.target.files;
            const newFiles: FileList = [];
            for (let i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                const url = URL.createObjectURL(file);
                newFiles.push({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    url,
                });
            }
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleFileDelete = (index: number) => {
        setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });
    };

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
                        {files.map((file, index) => (
                            <li key={file.name}>
                                <div>
                                    <span>{
                                    `${file.name}/${file.size}`.length > 25 
                                    ? `${file.name}/${file.size}`.split('').slice(0, 25).join('') + "..." 
                                    : `${file.name}/${file.size}`} bite</span>
                                </div>
                                <button className="add__del" onClick={() => handleFileDelete(index)}>Delete</button>

                            </li>
                        ))}
                    </ul>
                </>
            )}
            <div className="login__nav">
                <button className="media__item--delete" onClick={close}>
                    Cancel
                </button>
                <button className="media--add">Add Collection</button>
            </div>
        </div>
    );
}
