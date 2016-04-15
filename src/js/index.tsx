import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import basicApp from './reducers/reducer'
import ItemContainer from './Components/Container'
let store = createStore(basicApp);

render(
	<Provider store={store}>
		<ItemContainer />
	</Provider>,
	document.getElementById('content')
);
