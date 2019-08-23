import { connect } from 'react-redux'
import ColumnList from "../component/ColumnList";
import * as Action from "../action/index.action"


const mapStateToProps = (state) => {
    return {
        boardData: state.boardData
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDragEnd: (result) => dispatch(Action.onDragEnd(result))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColumnList)
