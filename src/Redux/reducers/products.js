import {} from '../actionTypes'
import productsArray from '../productsArray'

const initialState = productsArray

export default function(state = initialState, action = null){
	switch(action.type){
		default:
			return state
	}
}

