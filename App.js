import {createStackNavigator, createAppContainer} from 'react-navigation'
import Index from './screen/Index'
import Weather from './screen/Weather'
import Timer from './screen/Timer'
import ToDoList from './screen/ToDoList'

const AppContainer = createStackNavigator({
  Index : {
    screen : Index,
    navigationOptions: {
      title: 'Index',
    }
  },
  Weather : {
    screen : Weather,
    navigationOptions: {
      title: 'Weather',
    }
  },
  Timer : {
    screen : Timer,
    navigationOptions: {
      title: 'Timer',
    }
  },
  ToDoList : {
    screen : ToDoList,
    navigationOptions: {
      title: 'ToDoList',
    }
  },
})

export default createAppContainer(AppContainer);
