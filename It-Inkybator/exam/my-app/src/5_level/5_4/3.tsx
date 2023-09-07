import ReactDOM from 'react-dom/client';
import axios from 'axios'
import React from 'react';

export const Jpegs = () => {
    const onClick = () => {
        axios
            .get(
                'https://neko-back.herokuapp.com/file',
                {}
            )
            .then(({data}) => {
                const blob = new Blob(
                    [new Uint8Array(data)],
                    {type: 'image/jpeg'}
                )

                const downloadUrl = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = downloadUrl
                link.setAttribute('download', 'exam-img.jpg')
                document.body.appendChild(link)
                link.click()
                link.remove()
            })
    }

    return (
        <div>
            <button onClick={onClick}>get img</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Jpegs/>);

// 📜 Описание:
// Картинка сохраняется поломанной.
// Найдите ошибку.
// В качестве ответа укажите исправленную версию строки.
//
// 🖥 Пример ответа: {type: 'image/gif'}
// [new Uint8Array(data)],