import {
  ADD_ITEM_to_cart,
  DELETE_ITEM_from_cart,
  EDIT_ITEM_of_cart,
} from './actionTypes'

export const addItemToCart_action = content => ({
  type: ADD_ITEM_to_cart,
  payload: {
    id: content.id,
    title: content.title,
    price: content.price,
    img: content.img,
    count: content.count
  }
})

export const deleteItemFormCart_action = content => ({
  type: DELETE_ITEM_from_cart,
  payload: {
    id: content.id
  }
})

export const editItemOfCart_action = content => ({
  type: EDIT_ITEM_of_cart,
  payload: {
    id: content.id,
    count: content.count
  }
})