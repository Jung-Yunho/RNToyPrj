import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators as tomatoActions} from './reducer'
import Presenter from './Presenter'

function mapStateToProp(state){
    const {isPlaying, elapsedTime, timerDuration} = state
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch),
        initTimer: bindActionCreators(tomatoActions.initTimer, dispatch)
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Presenter)