import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './Container.css';
import Header from '../../Components/Header/Header';
import Update from "../Update/Update";

const Container = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`https://855637b89fc9ec39.mokky.dev/news/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error('Ошибка загрузки статьи:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, {id});

    if (loading) return <div className="div_load">
         <div class="col-3" >
        <div class="snippet" data-title="dot-rolling">
          <div class="stage">
            <div class="dot-rolling"></div>
          </div>
        </div>
      </div>
    </div>;
    if (!article) return <div>Статья не найдена</div>;

    return (
        <div className="container">
            <Header/>
            <div className="tabs">
                <Link to="/" className="tab red">Назад</Link>
            </div>
            
            <div className="main-content single-article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-date">{article.date}</p>
                <p className="article-text">{article.content}</p>
                
                {article.image && (
                    <img src={article.image} alt={article.title} className="article-image" />
                )}
                
                <p className="article-source">
                    Источник: <span className="source-link">{article.source}</span>
                </p>
                
                <div className="article-tags">
                    <span className="tag-button">{article.category}</span>
                </div>

                <Link to={`/update/${article.id}`}><button type="button" class="btn_update">Редактировать </button></Link>
                <button type="button" class="btn_delete">Удалить </button>
            </div>
        </div>
    );
}

export default Container;