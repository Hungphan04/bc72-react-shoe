import React, { useState } from 'react'
import { shoeArr } from './dataShoe'
import List from './List';
import Cart from './Cart';
import { render } from '@testing-library/react';

// b1: xây dao diện
// b2: xác định state
// b3: binding state lên dao diện
// b4: xử lí sự kiện thay đổi state (setState)

export default function ExShoe() {
  console.log("shoeArr", shoeArr)
  // usf
  const [ListShoe, setListShoe] = useState(shoeArr);
  const [cart, setCart] = useState([]);
  // state ở đâu thì setState ở đó 
  let handleRemoveFormList = (idShoe) => {
    console.log("🚀 ~ idShoe:", idShoe);
    let newListShoe = ListShoe.filter(function (shoe) {
      return shoe.id !== idShoe
    });
    // setState render lai giao dien
    setListShoe(newListShoe);
  };
  let handleAddToCart = (shoe) => {
    // console.log("🚀 ~ handleAddToCart ~ shoe:", shoe)
    // let data = {...shoe, total: 1};
    // let newCart = [...cart, data];
    // setCart(newCart);
    let cloneCart = [...cart]

    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // ko tim thay
      // th1: chua co trong gio hang => them vao gio hang
      let data = { ...shoe, total: 1 };
      cloneCart.push(data);
    } else {
      // th2: da co trong gio hang => tang so luong
      cloneCart[index].total++;
    }
    setCart(cloneCart);

  };
  let handelRemoveFormCart = (idShoe) => {
    let newCart = cart.filter(function (shoe) {
      return shoe.id !== idShoe
    });
    setCart(newCart);
  };
  let handleChangeTotal = (idShoe, option) => {
    // option : +1 hoac -1 / tang hoac giam so luong

    let cloneCart = [...cart];
    // tim vi tri cua sp can tang so luong
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    // cap nhat lai value cua object vua tim thay
    cloneCart[index].total = cloneCart[index].total + option;
    // kiem tra neu so luong bang 0 thi xoa khoi gio hang
    // if (cloneCart[index].total == 0) {
    //   cloneCart.splice(index, 1);
    // };
    // setState => render lai giao dien
    setCart(cloneCart);
  };

  return (
    <div className='row align-items-start'>
      <List dataShoe={ListShoe}
        handleRemoveFormList={handleRemoveFormList}
        handleAddToCart={handleAddToCart}
      ></List>
      <Cart dataCart={cart}
        handelRemoveFormCart={handelRemoveFormCart} handleChangeTotal={handleChangeTotal}></Cart>
    </div>
  );
};









