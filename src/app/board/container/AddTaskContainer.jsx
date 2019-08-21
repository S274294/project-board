import { connect } from 'react-redux'
import * as Action from "../action/index.action"
import AddTask from "../component/AddTask";

const mapStateToProps = (state, ownProps) => {
    return {
        addTask: state.operation.addTask,
        columnId: ownProps.columnId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTaskClick: (columnId) => dispatch(Action.openAddTask(columnId)),
        createTask: (columnId, task) => dispatch(Action.createTask(columnId, task)),
        handleCloseAddTask: () => dispatch(Action.closeAddTask())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTask)
