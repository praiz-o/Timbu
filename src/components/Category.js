import React from 'react';
import './category.css';
import SearchIcon from '../images/mi_filter (1).svg';


const Category = () => {
    return (
    <header className="cate">
      <nav className="na">
        <a href="/">Categories </a>
      </nav>
      <div className="icon">
      <p className='filters'>Show Filter</p>
        <button className="ico">
          <img src={SearchIcon} alt="filter" />
        </button>
        </div>
    </header>
            

  );
};

export default Category;
