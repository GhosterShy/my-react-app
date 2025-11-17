import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './main.css';
import Header from '../../Components/Header/Header';
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; 

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


  const filteredNews = news.filter((item) => {
    const searchText = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText)
    );
  });


  const handleSearch = (e) => {
    const value = e.target.value;

    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };


  

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
        
            <div style={{display:'flex',justifyContent:'center'}}>
              <input
                type="text"
                placeholder="Поиск..."
                defaultValue={query}
                onChange={handleSearch}
                style={{width: "200px" ,margin:'8px'}}
              />
          </div>
      </div>

      <div className="row1">
        {filteredNews.map(item => (
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