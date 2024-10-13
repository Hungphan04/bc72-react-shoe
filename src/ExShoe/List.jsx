import React from 'react'
// handleRemoveFormList
export default function List(props) {
    console.log("🚀 ~ List ~ props:", props);
    let { dataShoe, handleRemoveFormList, handleAddToCart } = props;
    let renderList = () => {
        return dataShoe.map(function (shoe, index) {
            return <div className='col-3'>
                <img width={100} src={shoe.image} alt="" />
                <button onClick={() => { handleAddToCart(shoe) }} className='btn btn-success'>Add</button>
                <button onClick={() => { handleRemoveFormList(shoe.id) }} className='btn btn-danger'>Delete</button>
            </div>
        });
    };
    return (
        <div className='row col-5'>
            {renderList()}
        </div>
    );
}



