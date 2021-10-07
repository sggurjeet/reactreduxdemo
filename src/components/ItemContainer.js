import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}
const mapStateToProps =(state,ownProps)=>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return{
        item: itemState
    }

}

const mapDispatchToProps =(dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake ? ()=> dispatch(buyCake()) : ()=> dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ItemContainer)

//common use case is the master detail scenario, from a list of pattern when you click on a particular item you would pass the item id as a prop and then fetch the data for that particular id from redux.
//When you want to dispatch actions but not subscribe to the state then you pass null instead of mapStateToProps