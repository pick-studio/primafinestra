import React from 'react';
import Link from 'next/link';

function PageNotFound() {
    return (
        <div className='error'>
            <div className='container'>
                <h1>Ой, кажется тут 404 ошибка,</h1>
                <p>данная страница не найдена</p>
                <p>Выберите нужное из списка:</p>
                <ul className='error-list'>
                    <li>
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <li>
                        <Link href={'/catalog/skylights'}>Каталог</Link>
                    </li>
                    <li>
                        <Link href={'/gallery'}>Галерея</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>О компании</Link>
                    </li>
                    <li>
                        <Link href={'/contacts'}>Контакты</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageNotFound;