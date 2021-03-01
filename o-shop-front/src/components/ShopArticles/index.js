import React from 'react';
import PropTypes from 'prop-types';
import Article from '../../containers/Article';
import Spinner from '../Spinner';

const ShopArticles = ({articles,  showSpinner}) => {
  
    return  (
    
    <div className="bg-primary flex h-screen ">
      <div className="flex p-1 flex-wrap overflow-hidden overflow-y-auto h-5/6 justify-center">
        {showSpinner && <Spinner />}

        {articles.map((article) => (
          <Article key={article.id} article={article} />  
        ))}
      </div>
    </div>

            )
};

ShopArticles.propTypes = {
  showSpinner: PropTypes.bool,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number}),)
    };

export default ShopArticles;
