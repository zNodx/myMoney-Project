import { combineReducers } from "redux";
import DashBoardReducer from '../dashboard/dashboardReducers'
const rootReducer = combineReducers ({
    dashboard: DashBoardReducer
})

export default rootReducer