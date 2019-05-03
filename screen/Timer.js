import React from 'react'
import Index from '../components/timer/Index'
import reducer from '../components/timer/reducer'
import {createStore} from "redux"
import {Provider} from 'react-redux'

let store = createStore(reducer);

export default class Timer extends React.Component
{
    render()
    {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}