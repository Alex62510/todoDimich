import React from 'react'
import ReactDOM from 'react-dom/client';

export const App = () => {
    return (
        <div>
            <h2>Сколько всего веток может быть в репозитории ?</h2>
            <ul>
                <li>1 - 2 ветки. master(main) и develop</li>
                <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
                <li>3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
                    создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки</li>
                <li>4 - Нет правильного ответа</li>
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

// 📜 Описание:
// Сколько всего веток может быть в репозитории ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1
//3
// 2


