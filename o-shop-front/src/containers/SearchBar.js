import { connect } from 'react-redux';
import SearchBar from '../components/ShopArticles/SearchBar';

import { searchChangeField } from '../store/actions';

const mapStateToprops = (state) => ({
    searchInputValue : state.searchInputValue,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeSearchInput: (value) => {
        dispatch(searchChangeField('searchInputValue', value));
    },
    onInputChange: () => {
        // ici, on va envoyer une action pour faire la requete LOGIN
        // cette action va être attrapée par le middleware
        // qui fera la requete
        dispatch({ type: 'SEARCH_CHANGE_FIELD' });
      },
});

export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);