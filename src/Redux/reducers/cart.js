import {
	ADD_ITEM_to_cart,
	DELETE_ITEM_from_cart,
	EDIT_ITEM_of_cart
} from '../actionTypes'

const initialState = {
	items: []
}

export default function(state = initialState, action){
	switch(action.type){
		case ADD_ITEM_to_cart: {
			const {
				id,
				title,
				price,
				img,
				count
			} = action.payload
			return {
				items: [
					...state.items,
					{
						id: id,
						title: title,
						price: price,
						img: img,
						count: count
					}
				]
			}
		}

		case DELETE_ITEM_from_cart: {
			const{
				id
			} = action.payload
			return{
				items: state.items.filter(item => item.id != id)
			}
		}

		case EDIT_ITEM_of_cart: {
			const{
				id,
				count
			} = action.payload
			return {
				items: state.items.map(item => id == item.id ? {...item,count: count} : item)
			}
		}

		default:
			return state
	}
}