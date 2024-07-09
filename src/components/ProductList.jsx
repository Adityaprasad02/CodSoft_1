import React, { useState } from 'react';

export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCheckoutPopupVisible, setIsCheckoutPopupVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setIsPopupVisible(true);
    } else {
      setCart([...cart, product]);
      const newQuantities = { ...quantities, [product.id]: 1 };
      setQuantities(newQuantities);
      setTotalPrice(totalPrice + parseInt(product.price));
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    const newQuantities = { ...quantities };
    const productQuantity = newQuantities[product.id];
    delete newQuantities[product.id];
    setCart(newCart);
    setQuantities(newQuantities);
    setTotalPrice(totalPrice - productQuantity * parseInt(product.price));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const increaseQuantity = (productId) => {
    const newQuantities = { ...quantities, [productId]: (quantities[productId] || 0) + 1 };
    setQuantities(newQuantities);
    const product = cart.find((item) => item.id === productId);
    setTotalPrice(totalPrice + parseInt(product.price));
  };

  const decreaseQuantity = (productId) => {
    if (quantities[productId] > 1) {
      const newQuantities = { ...quantities, [productId]: quantities[productId] - 1 };
      setQuantities(newQuantities);
      const product = cart.find((item) => item.id === productId);
      setTotalPrice(totalPrice - parseInt(product.price));
    }
  };

  const handleCheckout = () => {
    setIsCheckoutPopupVisible(true);
  };

  const closeCheckoutPopup = () => {
    setIsCheckoutPopupVisible(false);
  };

  const discount = parseInt(0.6 * totalPrice);
  const Products = [
    {
      id: 1,
      name: 'T-shirt (XL)',
      price: '299',
      image:
        'https://rukminim2.flixcart.com/image/612/612/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg?q=70',
    },
    {
      id: 2,
      name: 'SmartWatch',
      price: '499',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/w/o/t/-original-imagxp8thk2pbaqa.jpeg?q=70',
    },
    {
      id: 3,
      name: 'Perfume',
      price: '599',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/c/e/b/80-sporting-club-edp-srk-s-favorite-luxury-gift-pack-20ml-x-4-original-imahyf38heqp5y3d.jpeg?q=70',
    },
    {
      id: 4,
      name: 'Shoes',
      price: '699',
      image:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/y/z/6-rso356-red-tape-green-original-imagyu8hapw5hzfa.jpeg?q=70',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-gray-300 min-h-screen">
      {/* Product List */}
      <div className="lg:flex-1 overflow-y-auto p-4">
        {Products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <div key={product.id} className="bg-white w-full md:w-3/4 lg:w-4/5 xl:w-2/3 mx-auto rounded-lg shadow-md p-4 mb-4">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:flex-shrink-0 md:w-44 md:h-44">
                  <img className="w-full h-full rounded-lg" src={product.image} alt={product.name} />
                </div>
                <div className="flex flex-col md:flex-grow md:ml-4 mt-4 md:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                  <p className="text-red-700 font-bold mt-2">@Rs.{product.price}</p>
                  <div className="flex space-x-2 mt-4">
                    {!isInCart && (
                      <button
                        className="w-full md:w-auto px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
                        onClick={() => addToCart(product)}
                      >
                        + Add to Cart
                      </button>
                    )}
                    {isInCart && (
                      <>
                        <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-1">
                          <button
                            className="text-gray-600 hover:text-red-500 focus:outline-none"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            -
                          </button>
                          <span className="text-sm font-bold">{quantities[product.id]}</span>
                          <button
                            className="text-gray-600 hover:text-green-500 focus:outline-none"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className={`w-full md:w-auto px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-500`}
                          onClick={() => removeFromCart(product)}
                        >
                          - Remove
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Toggle Button (Mobile) */}
      <button
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-2 rounded-full shadow-md lg:hidden z-10"
        onClick={toggleCartVisibility}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-yellow-300">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.364 2.228a3 3 0 002.977 2.772h9.318a3 3 0 002.978-2.772L19 3H3zm0 0L5 18h14l2-15H3zM7 23a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm12 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      </button>

      {/* Shopping Cart */}
      <div className={`fixed inset-y-0 right-0 bg-green-100 h-fit shadow-lg p-4 my-14 lg:my-10 w-64 transform ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform lg:relative lg:translate-x-0 lg:w-1/3 xl:w-1/4 lg:flex lg:flex-col lg:h-auto lg:overflow-y-auto z-20`}>
        <div className="flex justify-between items-center text-center mb-4">
          <span className="text-xl text-blue-900 leading-relaxed bg-green-200 w-screen p-2 mt-4">Shopping Cart</span>
        </div>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 my-10">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-lg" src={item.image} alt={item.name} />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Rs.{item.price}</p>
                  <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-1">
                    <button
                      className="text-gray-600 hover:text-red-500 focus:outline-none"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="text-sm font-bold">{quantities[item.id]}</span>
                    <button
                      className="text-gray-600 hover:text-green-500 focus:outline-none"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="border-t border-gray-300 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Total</span>
            <span className="text-xl font-bold text-gray-900">Rs.{totalPrice}</span>
          </div>
          <br />
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Final Price - Discount Applied<span className='text-red-700'>(40%)</span></span>
            <span className="text-xl font-bold text-red-500">Rs.{discount}</span>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className={`w-full md:w-auto px-4 py-2 text-sm font-medium text-white rounded-lg ${
                cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500'
              }`}
              disabled={cart.length === 0}
              onClick={() => {
                if (cart.length > 0) {
                  setIsCheckoutPopupVisible(true);
                }
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-75 z-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-4">
            <p className="text-black text-center">Item already added! Set quantities in cart.</p>
            <button
              className="mt-4 px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isCheckoutPopupVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-75 z-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-4">
            <p className="text-black text-center">Thanks for shopping!!!!</p>
            <button
              className="mt-4 px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
              onClick={() => setIsCheckoutPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
