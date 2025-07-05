import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.url} width={100} />
                            <span style={{color:'red'}}><b>{cartItem.name}</b> </span>
                            <button
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? { ...item, quantity: item.quantity >0 ? item.quantity -1 :0  } : item
                                })
                                setCART(_CART)
                            }}
                            
                            >-</button>
                            <span style={{ margin:'5px',color:'blue' }}> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }
            <div>
            <p><b>Total Rs.</b>
            <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            </div>
        </div>
    )
}

export default CartList