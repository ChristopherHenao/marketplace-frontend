import React, { useEffect } from 'react';
import axios from 'axios'

import { fetchItems } from '../actions/actions';
import { connect } from 'react-redux';

const ItemList = () => {

    const getItems = () => {
        axios.get('https://buildweekproject.herokuapp.com/api/items')
        .then(res => {
            console.log(res.data);
            fetchItems(res.data);
        })
    }

    useEffect(() => {
        getItems()
    },[])

    return (
        <div>
            This is the Item List
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};


export default connect( mapStateToProps )(ItemList)