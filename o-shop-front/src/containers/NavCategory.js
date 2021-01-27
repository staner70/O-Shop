import { connect } from 'react-redux';
import NavCategory from '../components/NavCategory';

import { getCategoriesFromApi} from '../store/actions';

const mapStateToProps = (state) => ({
    categories: state.admincategory.list,
    value:state.admincategory.idValue,
  });

  const mapDispatchToProps = (dispatch) => ({
    getCategories: () => {
      dispatch(getCategoriesFromApi());
    }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(NavCategory);