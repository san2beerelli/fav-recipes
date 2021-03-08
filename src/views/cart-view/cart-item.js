import { Box, ListItem, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Product from '../../components/product'
import QuantityPicker from '../../components/quantity'

const CartItem = ({item, onPriceChange, onItemDelete}) => {
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    useEffect(() => {
        setPrice(quantity * item.price)
    }, [quantity, item, price])

    const onQuantityChangeHandler = ({type,updatedQuantity}) => {
        setQuantity(updatedQuantity)
        onPriceChange({type, price: item.price})
    }

    const onDeleteClickHandler = () => {
        onItemDelete(item)
    }

    return(
        <ListItem key={item.name}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' width='100%' padding={1}>
                <Product icon={item.emoji} />
                <QuantityPicker onChange={onQuantityChangeHandler} value={quantity} onDelete={onDeleteClickHandler}/>
                <Typography style={{width: 75}} variant='h6'>${price}</Typography>
            </Box>
        </ListItem>
    )

}

export default CartItem