

import { connect } from 'react-redux'
import * as Action from "../action/index.action"
import ColumnMenu from "../component/menu/ColumnMenu";



const mapStateToProps = (state, ownProps) => {
    return {
        columnTitle: ownProps.title
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleUpdateTitle: (title) => dispatch(Action.updateColumnTitle(title, ownProps.columnId)),
        handleAddColumn: (title) => dispatch(Action.addColumnAfterCurrent(title, ownProps.columnId)),
        handleClearTask: () => dispatch(Action.clearColumnTasks(ownProps.columnId)),
        handleDeleteColumn: () => dispatch(Action.deleteColumn(ownProps.columnId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColumnMenu)
