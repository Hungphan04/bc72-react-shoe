import React from 'react'
import { Button, Popconfirm } from 'antd';
export default function Cart({ dataCart, handelRemoveFormCart, handleChangeTotal }) {
  let renderTbody = () => {
    return dataCart.map(function (item) {
      return <tr key={item.id}>
        <td>{item.name}</td>
        <td><img width={100} src={item.image} alt="" /></td>
        <td>{item.price}</td>
        <td>
          {
            // neu total la 1 thi render button xoa
            item.total == 1 ? <Popconfirm
              title="Delete this shoe?"
              onConfirm={() => { 
                handelRemoveFormCart(item.id);
              }}
              okText="Yes"
              showCancel={false}
             
            >
              <Button type='primary'>-</Button>
            </Popconfirm> : <button
              onClick={() => {
                handleChangeTotal(item.id, -1)
              }} className='btn btn-warning'>-</button>
          }
          <span className='mx-3'>{item.total}</span>
          <button
            onClick={() => {
              handleChangeTotal(item.id, 1)
            }} className='btn btn-warning'>+</button>
        </td>
        <td>
          <button
            onClick={() => {
              handelRemoveFormCart(item.id)
            }} className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    });
  };
  return (
    <div className='col-7'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTbody()}</tbody>
      </table>
    </div>
  );
}



