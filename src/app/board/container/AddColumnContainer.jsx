import { connect } from 'react-redux'
import * as Action from "../action/index.action"
import AddColumn from "../component/AddColumn";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreate: (content) => dispatch(Action.createColumn(content))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddColumn)
