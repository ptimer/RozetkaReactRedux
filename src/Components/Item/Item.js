import './Item.scss'

// redux
import {connect} from 'react-redux'
import {addItemToCart_action} from '../../Redux/actions'

function Item({price, product, addItemToCart_action}) {

  const showPrice = _ => {
    if(price.discont === true){
      return (<>
                <div className='price-old'>{price.old} <span>₴</span></div>
                <div className='price-new'>{price.new} <span>₴</span></div>
              </>)
    }else{
      return(<>
                <div className='empty-space'></div>
                <div className='price'>{price.price} <span>₴</span></div>
             </>)
    }
  }

  const handleAddToCart = _ => {
    if(price.discont === true){
      addItemToCart_action({
        id: product.id,
        title: product.title,
        price: product.new,
        img: product.img,
        count: 1
      })
      return
    }

    addItemToCart_action({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      count: 1
    })
  }

  return (
    <li className='item'>
      <button className='toFavourite' onClick={handleAddToCart}>
        <svg height='24' width='24' viewBox="0 0 24 24" id="icon-heart-empty">
            <path clip-rule="evenodd" d="m3.4181 5.31884c.9661-1.14226 2.37454-1.81884 4.0819-1.81884 1.14319 0 2.23774.62595 3.0785 1.26152.5191.39237 1.0029.83608 1.4215 1.26141.4186-.42533.9024-.86904 1.4215-1.26141.8408-.63557 1.9353-1.26152 3.0785-1.26152 1.7379 0 3.1462.75107 4.0986 1.93888.9358 1.16719 1.4014 2.71241 1.4014 4.31112 0 1.4435-.7114 2.8288-1.6063 4.0219-.9086 1.2116-2.0982 2.3461-3.2535 3.3088-1.1605.9671-2.3162 1.7854-3.1793 2.3607-.4324.2883-.7935.517-1.0478.6745-.1272.0787-.2279.1397-.2975.1815-.0349.0209-.0619.037-.0807.0481l-.022.013-.0061.0036-.0019.0011c-.0002.0001-.001.0006-.5049-.8632-.5039.8638-.5041.8637-.5043.8635l-.0025-.0015-.0063-.0036-.022-.013c-.0189-.0112-.046-.0273-.0809-.0483-.0698-.0419-.1707-.1031-.298-.1822-.2547-.1581-.6162-.3879-1.0491-.678-.86379-.5791-2.02057-1.4045-3.18207-2.3853-1.15656-.9766-2.34684-2.1315-3.2556-3.3734-.89758-1.2266-1.59923-2.645-1.59923-4.12779 0-1.60112.46738-3.10749 1.4181-4.23157zm8.5819 14.18116-.5043.8635.5043.2942.5039-.2939zm.0005-1.1719c.2246-.1408.5147-.3265.8511-.5508.8244-.5496 1.9187-1.3251 3.0082-2.233 1.0947-.9123 2.1551-1.934 2.934-2.9724.7926-1.057 1.2062-2.0154 1.2062-2.8219 0-1.22952-.3599-2.3093-.9618-3.06005-.5854-.73014-1.4271-1.18995-2.5382-1.18995-.4663 0-1.1176.28637-1.8724.85695-.7209.54494-1.3915 1.23793-1.8686 1.79414l-.759.88481-.759-.88481c-.4771-.55621-1.1477-1.2492-1.86856-1.79414-.7548-.57058-1.40613-.85695-1.87244-.85695-1.14164 0-1.9832.4345-2.55485 1.11039-.58703.69408-.94515 1.71291-.94515 2.94002 0 .86699.42335 1.86719 1.21327 2.94669.77874 1.0643 1.83846 2.1031 2.9319 3.0264 1.0885.9192 2.18173 1.7 3.00543 2.2521.336.2253.6256.4115.8499.5525z" fill-rule="evenodd"></path>
        </svg>
      </button>
      <a className='picture' href='#'>
        <img src={product.img}/>
      </a>
      <a className='title' href={product.id}>{product.title}</a>
      <div className='prices'>
        {showPrice()}
      </div>
    </li>
  );
}

export default connect(
  null,
  {addItemToCart_action}
)(Item)