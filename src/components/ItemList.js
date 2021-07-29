import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ItemCard from './ItemCard'

import { fetchItems } from '../actions/actions';
import { connect } from 'react-redux';

const initialValue = {
    market_id: 0
}


const ItemList = (props) => {

    const [ marketValue, setMarketValue ] = useState(initialValue)

    const getItems = () => {
        axios.get('https://buildweekproject.herokuapp.com/api/items')
        .then(res => {
            handleFetchItems(res.data);
        })
        .catch(err => {
            console.log('This is not working: ', err);
        })
    }

    useEffect(() => {
        getItems()
    },[]) // eslint-disable-line

    const handleFetchItems = (data) => {
        props.fetchItems(data)
    }

    const handleChanges = (e) => {
        setMarketValue({
            ...marketValue,
            [e.target.name]: e.target.value
        })
    };

    let marketArray = props.items.filter(item => item.market_id == marketValue.market_id) // eslint-disable-line

    
    return (
        <div class="item-list-container">
            <div id="itemMarketDiv">
                <label>Market Location: </label>
                <select 
                    name="market_id"
                    value={marketValue.market_id}
                    onChange={handleChanges}>
                    <option value={0}>All Locations</option>
                    <option value={1}>South Africa</option>
                    <option value={2}>Middle Africa</option>
                    <option value={3}>East Africa</option>
                    <option value={4}>West Africa</option>
                    <option value={5}>North Africa</option>
                </select>
                <br/>
            </div>
            <div className="item-list">
                {marketValue.market_id == 0 ? // eslint-disable-line
                props.items.map(item => {return <ItemCard key={item.item_id} item={item}/>}) 
                : 
                marketArray.map(item => {return <ItemCard key={item.item_id} item={item}/>})}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        isLoggedIn: state.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (items) => dispatch(fetchItems(items))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(ItemList)