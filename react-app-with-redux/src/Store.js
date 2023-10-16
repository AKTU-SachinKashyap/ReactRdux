import { createStore } from 'redux'

import rootReducer from './ToDoAPP/Reducers/index'

const store = createStore(rootReducer);

export default store