import {connect} from 'react-redux';
import {addLike} from '../actions/HotelTableContainer';
import HotelTable from './HotelTable';

const mapStateToProps = (state) => {
    return {
        hotels: state.hotels
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (id) => {
            dispatch(addLike(id))
        }
    }
};

const HotelTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelTable);

export default HotelTableContainer;