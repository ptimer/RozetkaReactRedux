import {useState} from 'react'

import './Wrapper.scss'
import Header from '../Header/Header'
import List from '../List/List'
import Item from '../Item/Item'
import Slider from '../Slider/Slider'
import Sidebar from '../Sidebar/Sidebar'
import ModalCart from '../ModalCart/ModalCart'
// Redux
import {connect} from 'react-redux'


const Wrapper = ({products, cart}) => {

	const[showCartModal, setShowCartModal] = useState(false)

	const handleModalCartOpen = _ => {
		setShowCartModal(!showCartModal)
	}

	const sum = (array) => {
		var sum = 0;
		for(var i = 0; i < array.length; i++){
			sum += array[i];
		}
		return sum
	}

	return(
		<div className='wrapper'>
			<ModalCart showCartModal={showCartModal} products={cart.items} finalPrice={sum(cart.items.map(item => parseInt(item.price.replace( /\s/g, ""),10) * item.count))} handleModalCartOpen={handleModalCartOpen} />
			<Header handleModalCartOpen={handleModalCartOpen} count={cart.items.length}/>
			<div className='layout'>
				<main className='content'>
					<Slider/>

					<button className='catalog-mobile'>
			            <svg viewBox="0 0 24 24" id="icon-catalog">
			                <g clip-rule="evenodd" fill-rule="evenodd">
			                    <path d="m17 2.75735-4.2427 4.24264 4.2427 4.24261 4.2426-4.24261zm-5.6569 2.82843c-.7811.78104-.7811 2.04738 0 2.82842l4.2426 4.2427c.7811.781 2.0475.781 2.8285 0l4.2426-4.2427c.781-.78104.781-2.04738 0-2.82842l-4.2426-4.24264c-.781-.781048-2.0474-.781048-2.8285 0z"></path>
			                    <path d="m7 4h-4c-.55228 0-1 .44772-1 1v4c0 .5523.44772 1 1 1h4c.55228 0 1-.4477 1-1v-4c0-.55228-.44772-1-1-1zm-4-2c-1.65685 0-3 1.34315-3 3v4c0 1.6569 1.34315 3 3 3h4c1.65685 0 3-1.3431 3-3v-4c0-1.65685-1.34315-3-3-3z"></path>
			                    <path d="m7 16h-4c-.55228 0-1 .4477-1 1v4c0 .5523.44772 1 1 1h4c.55228 0 1-.4477 1-1v-4c0-.5523-.44772-1-1-1zm-4-2c-1.65685 0-3 1.3431-3 3v4c0 1.6569 1.34315 3 3 3h4c1.65685 0 3-1.3431 3-3v-4c0-1.6569-1.34315-3-3-3z"></path>
			                    <path d="m19 16h-4c-.5523 0-1 .4477-1 1v4c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-4c0-.5523-.4477-1-1-1zm-4-2c-1.6569 0-3 1.3431-3 3v4c0 1.6569 1.3431 3 3 3h4c1.6569 0 3-1.3431 3-3v-4c0-1.6569-1.3431-3-3-3z"></path>
			                </g>
			            </svg>
			            Каталог товаров
			          </button>

					<section className='products_list'>
						<h2 className='last-viewed-title'>Последние просмотренные товары</h2>
						<List>
							{products.map(product => {
									if(product.discont === true){
										return (<Item key={product.id} product={product} 
																	   price={{discont: true, new: product.new, old: product.old}}/>)
									}

									if(product.discont === false){
										return (<Item key={product.id} product={product} 
																	   price={{discont: false, price: product.price}}/>)
									}
							})}
					    </List>
					</section>
				    <section className='products_list'>
						<h2 className='last-viewed-title'>Рекомендации на основе ваших просмотров</h2>
						<List>
					      
					    </List>
					</section>
					<section className='products_list'>
						<h2 className='last-viewed-title'>Бестселлеры в категории Учебники</h2>
						<List>
					      	
					    </List>
					</section>
					<section className='products_list'>
						<h2 className='last-viewed-title'>Только в Розетке</h2>
						<List>
					      	
					    </List>
					</section>
					<section className='products_list'>
						<h2 className='last-viewed-title'>Больше товаров для выбора</h2>
						<List>
					      	
					    </List>
					</section>
				</main>
				<Sidebar/>
			</div>
		</div>
	)
}


export default connect(
	state => {
		return {
			products: state.products,
			cart: state.cart
		}
	},
	null
)(Wrapper)
