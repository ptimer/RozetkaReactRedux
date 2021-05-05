import './ModalCart.scss'
import ModalItem from '../ModalItem/ModalItem'

const ModalCart = ({showCartModal, handleModalCartOpen, finalPrice, products}) => {
  return (
    <div id='modal-cart' className={showCartModal ? 'active' : 'disable'}>
    	<div className="modal-content">
    		<div class="modal-header">
			    <span className="modal-close" onClick={handleModalCartOpen}>&times;</span>
			    <h3>Корзина</h3>
			</div>
		    <div class="modal-body">
			    {products.map(product => <ModalItem key={product.id} product={product} />)}
		  	</div>
			<div class="modal-footer">
			  <a href='#' className='modal-btn-continue' onClick={handleModalCartOpen}>Продолжить покупки</a>
			  <div>
			  	<p>{finalPrice}<span> ₴</span></p>
			  	<a href='#' className='modal-btn-order'>Оформить заказ</a>
			  </div>
			</div>
		</div>
    </div>
  );
}

export default ModalCart