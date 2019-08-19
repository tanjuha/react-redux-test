import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Hotels} from '../components/hotels/Hotels.jsx';
import {requestGetHotels} from '../../actions/hotel-action';


function mapStateToProps(state) {
    console.log(state)
    return {
       users: state.users.listUsers
    }
};

function mapDispatchToProps(dispatch) {
    return{ 
        requestGetHotels: bindActionCreators(requestGetHotels, dispatch)
    }        
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)