
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Cart = () => {
    const vat = 20;
    const history = useHistory()
    const {id,names,imgs,prices,addedItems,quantities,placeOrder} = useAuth()
    console.log(names)
    const price = addedItems(prices)
    const quantity= addedItems(quantities)
 

    const editOrder = () => {
        history.push(`/details/${id}`)
    }

    const confirmed = () => {
        history.push('/confirmed')
        placeOrder()
    }
    const somthing = () => {
        history.push('/home')
    }
    return (
        <Container>
            <div className="row my-5">
            <div className="col-12 col-md-6">
                    <div className="">
                        <div style={{width:'70%'}} className="mx-auto mt-2">
                            <h5 className="text-start">Your address to deliver order</h5>
                            <input className="signPut" placeholder="Your Name" type="text" name="" id="" />
                            <input className="signPut" placeholder="Your Mobile number" type="mobile" name="" id="" />
                            <input className="signPut" placeholder="Your address" type="text" name="" id="" />
                            <input className="signPut" placeholder="District" type="text" name="" id="" />
                        </div>
                        <div style={{width:'70%'}} className="mx-auto mt-2">
                            <button onClick={confirmed} style={{background:'rgb(255, 0, 106)',borderRadius:'4px'}} className="w-100 text-light p-3 border-0">Place order</button><br /><br />
                            {
                                price ? <button onClick={editOrder} style={{borderRadius:'4px'}} className="w-100 bg-success text-light p-3 border-0">Change Order</button>  : <button onClick={somthing} style={{borderRadius:'4px'}} className="w-100 bg-warning text-dark p-3 border-0">Order something</button>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-5">
                    <div className="bg-primary bg-light shadow-lg text-dark w-75 mx-auto p-3">
                        <p className="text-start m-0 p-0">From mohakhali DOHS</p>
                        <p className="text-start m-0 p-0">Arived in 15-20 min</p>
                        <p className="text-start m-0 p-0">107 road no 87</p>
                        { price ? <div className="row rounded text-light align-items-center my-3  shadow-lg text-dark">
                            <div className="col-md-8">
                            <div className="" style={{width:'100%'}}>
                                {
                                    names.map((nam,i) => <p style={{height:'50px'}} className="m-0 p-0" key={i}>{nam}</p>)
                                }
                            </div>
                                
                            </div>
                            <div className="col-md-4 text-start">
                                <div className="my-2" style={{width:'50px'}}>
                                    {
                                        imgs.map((img,j) => <img style={{height:'50px'}} key={j} className="w-100 h-100" src={img} alt="" />)
                                    }
                                </div>
                            </div>
                        </div> : <h1>Empty Order</h1>}
                        <p className="text-start m-0 p-0">Order price : {price}</p>
                        <p className="text-start m-0 p-0">Total order : {quantity}</p>
                        <p className="text-start m-0 p-0">Delivery Cost : 20</p>
                        <p className="text-start m-0 p-0">Vat {(price*0.1).toFixed(2)}</p>
                        <p className="text-start m-0 p-0">You have to pay : {price ? ((price) + (price*0.1.toFixed(2)) + vat) : 0}</p>
                    </div>
                </div>
                
            </div>
        </Container>
        
    );
};

export default Cart;