import ReactDOM from 'react-dom/client';
import React, { useState } from 'react'
import axios from 'axios'

export const Jpegs = () => {
    const [file, setFile] = useState<any>()
    const [formData, setFormData] = useState<any>()
    console.log(formData)

    const onChange = (e: any) => {
        const maybeFile = e.target.files?.[0]
        if (maybeFile) {
            if (maybeFile.type === 'image/jpeg') {
                setFile(maybeFile)
                const draftFormData = new FormData()
                draftFormData.append('myFile', maybeFile, maybeFile.name)
                setFormData(draftFormData)
                return
            } else alert('not .jpg!')
        }
        setFormData('')
        setFile('')
    }
    const onClick = () => {
        axios.post(
            'https://neko-back.herokuapp.com/file',
            file
        )
            .then(() => {
                alert('Вы справились 🚀')
            })
            .catch(() => {
                alert('😥 Что то пошло не так...')
            })
    }

    return (
        <div>
            <input
                type={'file'}
                onChange={onChange}

            />
            <div>updated: {file && new Date(file?.lastModified).toLocaleDateString()}</div>
            <div>size: {((file?.size || 0) / 1048576).toFixed(2) + 'MB'}</div>

            <button onClick={onClick} disabled={!file}>
                send
            </button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Jpegs/>);

// 📜 Описание:
// Не работает отправка картинки на backend.
// Найдите ошибку.
// В качестве ответа укажите исправленную версию строки.
//
// 🖥 Пример ответа: value={file}
//formData