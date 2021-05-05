import {useState} from 'react'

import './ModalItem.scss'
// Redux
import {connect} from 'react-redux'
import {editItemOfCart_action, deleteItemFormCart_action} from '../../Redux/actions'

const ModalItem = ({product, editItemOfCart_action, deleteItemFormCart_action}) => {

  const [count, setCount] = useState(product.count)

  const handleAddCount = () => {
	setCount(parseInt(count, 10) + 1)
	editItemOfCart_action({id: product.id, count: count + 1})
  }
	
  

  const handleRemoveCount = () => {
  	if(count == 0){
  		return
  	}else{
  		setCount(parseInt(count, 10) - 1)
  	}
	editItemOfCart_action({id: product.id, count: count - 1})
  }
		

  const handleChangeCount = (e) => {
  	setCount(parseInt(e.target.value, 10))
  	editItemOfCart_action({id: product.id, count: e.target.value})
  }

  return (
		<div className='cart-item'>
			<div className='cart-content'>
				<div>
					<img src={product.img}/>
				</div>
				<p>{product.title}</p>
				<button onClick={_ => deleteItemFormCart_action({id: product.id})}>Удалить</button>
			</div>
			<div className='cart-item-footer'>
				<div className='cart-item-counter'>
					<button className='cart-btn-remove' onClick={handleRemoveCount}>
						<svg viewBox="0 0 24 24" id="icon-minus">
						    <path clip-rule="evenodd" d="m3 12c0-.5523.44772-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z" fill-rule="evenodd"></path>
						</svg>
					</button>
					<input type='text' value={count} onChange={handleChangeCount}/>
					<button className='cart-btn-add' onClick={handleAddCount}>
						<svg viewBox="0 0 24 24" id="icon-plus">
						    <path d="m13 4c0-.55228-.4477-1-1-1s-1 .44772-1 1v7h-7c-.55228 0-1 .4477-1 1s.44772 1 1 1h7v7c0 .5523.4477 1 1 1s1-.4477 1-1v-7h7c.5523 0 1-.4477 1-1s-.4477-1-1-1h-7z"></path>
						</svg>
					</button>
				</div>
				<p>{parseInt(product.price.replace( /\s/g, ""),10) * count} ₴</p>
			</div>
		</div>
  );
}

export default connect(
  null,
  {editItemOfCart_action, deleteItemFormCart_action}
)(ModalItem)
