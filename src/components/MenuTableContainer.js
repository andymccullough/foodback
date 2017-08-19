import {connect} from 'react-redux';
import {addLike, addMenu} from '../actions/MenuTableContainer';
import MenuTable from './MenuTable';

const mapStateToProps = (state) => {
    return {
        menus: state.menus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (id) => {
            dispatch(addLike(id))
        },
        addMenu: (title) => {
            dispatch(addMenu(title))
        }
    }
};

const MenuTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuTable);

export default MenuTableContainer;