import { connect } from 'react-redux'
import * as Action from "../action/index.action";
import CustomDropDown from "../component/CustomDropDown";


const sortList = {
    DEFAULT: "项目自定义排序", START_FIRST:"按开始时间最早",
    START_LATEST: "按开始时间最晚", PRIORITY_FIRST: "按照优先级最高",
    DUETIME_FIRST: "按截止时间最近", CREATE_FIRST: "按创建时间最早",
    CREATE_LATEST: "按创建时间最晚", UPDATE_FIRST: "按更新时间最早",
    UPDATE_LATEST:"按更新时间最晚"
}

const mapStateToProps = (state) => {
    return {
        overlay: sortList,
        selected: state.selector.order
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onChoose: (order) => dispatch(Action.taskOrder(order))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomDropDown)

