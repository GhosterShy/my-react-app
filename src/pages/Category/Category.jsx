import React from "react";
import { Link } from "react-router-dom";
import styles from './Category.css';
import Header from '../../Components/Header/Header';

const Category = () => {
    const categories = [
        { 
            id: 'all', 
            name: 'Все новости', 
            icon: 'fas fa-home',
            path: '/'
        },
        { 
            id: 'football', 
            name: 'Футбол', 
            icon: 'fas fa-futbol',
            path: '/category/football'
        },
        { 
            id: 'basketball', 
            name: 'Баскетбол', 
            icon: 'fas fa-basketball-ball',
            path: '/category/basketball'
        },
        { 
            id: 'rugby', 
            name: 'Регби', 
            icon: 'fas fa-football-ball',
            path: '/category/rugby'
        },
        { 
            id: 'hockey', 
            name: 'Хоккей', 
            icon: 'fas fa-hockey-puck',
            path: '/category/hockey'
        },
        { 
            id: 'esports', 
            name: 'Киберспорт', 
            icon: 'fas fa-gamepad',
            path: '/category/esports'
        },
        { 
            id: 'boxing', 
            name: 'Бокс', 
            icon: 'fas fa-boxing-glove',
            path: '/category/boxing'
        },
        { 
            id: 'mma', 
            name: 'Mix Fight', 
            icon: 'fas fa-octagon',
            path: '/category/mma'
        }
    ];

    return (
        <div className="container1">
            <Header/>
            <div className="tabs">
                <div className="tab orange">Категории</div>
            </div>
            
            <div className="main-content category-grid">
                {categories.map(category => (
                    <Link 
                        key={category.id} 
                        to={`/category/${category.name}`}
                        className="category-link"
                    >
                        <div className="category-item">
                            <i className={category.icon + " category-icon"}></i>
                            <p className="title_icon">{category.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Category;