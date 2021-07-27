import React, { useEffect } from 'react';
import axios from 'axios'
import ItemCard from './ItemCard'

import { fetchItems } from '../actions/actions';
import { connect } from 'react-redux';

const ItemList = (props) => {

    const getItems = () => {
        axios.get('https://buildweekproject.herokuapp.com/api/items')
        .then(res => {
            console.log(res.data);
            handleFetchItems(res.data);
        })
    }
    

    useEffect(() => {
        getItems()
    },[])

    const handleFetchItems = (data) => {
        props.fetchItems(data)
    }

    return (
        <div className="item-list">
            {props.items.map(item => {
                return <ItemCard item={item}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (items) => dispatch(fetchItems(items))
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(ItemList)