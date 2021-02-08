import { connect } from 'react-redux';
import SearchBar from '../components/ShopArticles/SearchBar';

import { searchChangeField } from '../store/actions';

const mapStateToprops = (state) => ({
    inputValue : state.adminproduct.search,
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (value) => {
        dispatch(searchChangeField('inputValue', value));
    },
});

export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);