import React, { useState, useEffect } from "react";

function App () {

  const [product, setProduct] = useState({
    coffee: 0,
    sugar: 0
  });

  const addProduct = (name) => {
    setProduct(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1
    }));
  };

  const removeProduct = (name) => {
    if (product[name] <= 0) {
      return;
    }
    setProduct(prevState => ({
      ...prevState,
      [name]: prevState[name] - 1
    }));
  };

  const save = () => {
    localStorage.setItem('coffee', product.coffee);
    localStorage.setItem('sugar', product.sugar);
  }

  const clear = () => {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
    setProduct({ coffee: 0, sugar: 0 });
  };

  useEffect(()=>{
    if (localStorage.getItem('coffee')){
      setProduct({
        coffee: +localStorage.getItem('coffee'),
        sugar: +localStorage.getItem('sugar')
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className='product'>
          <span>{`Coffee: ${product.coffee}`}</span>
          <button onClick={() => addProduct("coffee")}>Add</button>
          {product.coffee > 0 && (
            <button onClick={() => removeProduct("coffee")}>Remove</button>
          )}
        </div>
        <div className='product'>
          <span>{`Sugar: ${product.sugar}`}</span>
          <button onClick={() => addProduct("sugar")}>Add</button>
          {product.sugar > 0 && (
            <button onClick={() => removeProduct("sugar")}>Remove</button>
          )}
        </div>
        <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div> 
  );
}

export default App;
