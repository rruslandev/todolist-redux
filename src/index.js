import ReactDOM from 'react-dom'
import { Root } from './Root'
import { cofigureStore } from './store'

const store = cofigureStore()

const rootElement = document.getElementById('root')
ReactDOM.render(<Root store={store} />, rootElement)
