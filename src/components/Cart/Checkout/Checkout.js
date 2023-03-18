import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { createPortal } from 'react-dom';
import CartContext from '../../../store/cartContext';
import Bar from './Bar/Bar';
import classes from './Checkout.module.css';
import CheckoutItem from './CheckoutItem/CheckoutItem';


const checkoutRoot = document.querySelector("#checkout-root");

export default function Checkout(props) {
  const cartCtx = useContext(CartContext)
  return createPortal(
    <div className={classes.checkout}>
      <div className={classes.close}>
        <FontAwesomeIcon icon={faClose} onClick={() => props.hideCheckout()} />
      </div>

      <div className={classes.mealsDesc}>
        <header className={classes.header}>
          <h2>餐品详情</h2>
        </header>

        <div className={classes.meals}>
          {!cartCtx.items?.length ?
            <div className={classes.noMeals}>您还没添加餐品！</div>
           : (
            cartCtx.items.map((item) => (
              <CheckoutItem key={item.id} meal={item} />
            ))
          )}
        </div>

        <footer className={classes.footer}>
          <span>
            合计¥<b>{cartCtx.totalPrice}</b>
          </span>
        </footer>
        <Bar totalPrice={cartCtx.totalPrice}/>
      </div>
    </div>,
    checkoutRoot
  );
}
