import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './main.css';
import Header from '../../Components/Header/Header';

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://855637b89fc9ec39.mokky.dev/news');
        setNews(response.data);
      } catch (error) {
        console.error('Ошибка загрузки новостей:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className='div_load'>
     <div class="col-3">
        <div class="snippet" data-title="dot-rolling">
          <div class="stage">
            <div class="dot-rolling"></div>
          </div>
        </div>
      </div>
  </div>;

  return (
    <div className="container1">
      <Header />
      <div className="tabs">
        <div className="tab">Все новости</div>
      </div>

      <div className="row1">
        {news.map(item => (
          <div key={item.id} className="col">
            <Link to={`/container/${item.id}`} state={item} className="news-link">
              <div className='col_text'> 
                <h3 className="news-title">{item.title}</h3>
                <p className="news-date">{item.date}</p>
                <p className="news-category">{item.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;