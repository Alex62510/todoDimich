import ReactDOM from 'react-dom/client';
import React, { useState } from 'react'

export const Jpegs = () => {
    const [fileURL, setFileURL] = useState<any>()

    const onChange = (e: any) => {
        const maybeFile = e.target.files?.[0]
        if (maybeFile) {
            if (maybeFile.type === 'image/jpeg') {

                setFileURL(URL.createObjectURL(maybeFile))
                return
            } else alert('not .jpg!')
        }
        setFileURL('')
    }

    return (
        <div>
            <input
                type={'file'}
                onChange={onChange}
value={fileURL}
            />
            {fileURL && (
                <img
                    src={fileURL}
                    alt={'avatar'}

                />
            )}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Jpegs/>);

// 📜 Описание:
// Не отображается картинка при выборе.
// В качестве ответа укажите исправленную версию строки кода
//
// 🖥 Пример ответа: value={fileURL}
// setFileURL(URL.createObjectURL(maybeFile))