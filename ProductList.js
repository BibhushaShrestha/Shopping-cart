import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                      <div style={{ width: '33.333%'}}>    
                        <div className='product-item'>
                           {/*<img src={productItem.url} width="100%" /> */}
                            <img width="100%" height={350} src={productItem.url} />
                            <p>{productItem.name} | {productItem.category} </p>
                            <p>{productItem.size} </p>
                            <div className='product-price'>
                            <p> Rs. {productItem.price} /-</p>
                            </div>
                            <button
                            onClick={() => addToCart(productItem)}
                             ><b>Add To Cart</b></button>
                         </div>   
                       </div>   
                    )
                 })
            }
        </div>
    )
}
export default ProductList 