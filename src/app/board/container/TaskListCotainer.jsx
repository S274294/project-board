import { connect } from 'react-redux'
import TaskList from "../component/TaskList";
import * as Action from "../action/index.action";

const mapStateToProps = (state, ownProps) => {
    return {
        columnId: ownProps.columnId,
        boardData: Action.reorderBoardData(state.boardData, state.selector.order)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)
