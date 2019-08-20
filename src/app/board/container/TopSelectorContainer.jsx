import { connect } from 'react-redux'
import * as Action from "../action/index.action";
import TopSelector from "../component/TopSelector";

const mapStateToProps = (state) => {
    return {
        order: state.selector.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChooseOrder: (order) => dispatch(Action.taskOrder(order))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopSelector)
