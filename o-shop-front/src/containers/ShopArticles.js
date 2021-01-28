import { connect } from 'react-redux';
import ShopArticles from '../components/ShopArticles';
import { withRouter } from 'react-router-dom';
import { getProductsById } from '../utils';

import { getProductsFromApi } from '../store/actions';


const mapStateToProps = (state, ownProps) => ({
  articles: getProductsById(state.adminproduct.list, ownProps.match.params.id ),
    
  });

  const mapDispatchToProps = (dispatch) => ({
    getProducts: () => {
      dispatch(getProductsFromApi());
    },
    
  });

  const container = connect(mapStateToProps, mapDispatchToProps)(ShopArticles);
  const  ShopArticlesWithRouter = withRouter(container);


  export default ShopArticlesWithRouter;
