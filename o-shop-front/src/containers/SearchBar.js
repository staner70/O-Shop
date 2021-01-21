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
});

export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);