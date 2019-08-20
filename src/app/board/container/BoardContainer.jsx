import { connect } from 'react-redux'
import Board from '../component/Board'
import * as Action from "../action/index.action"


const mapDispatchToProps = (dispatch) => {
    return {
        requestBoard: () => dispatch(Action.requestBoard()),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Board)
