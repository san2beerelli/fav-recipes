import { Box, List, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { Fragment } from 'react'
import { AppContext } from '../../context/app-context'
import CartItem from './cart-item'

const CartList = () => {
    const { appState, appActions } = useContext(AppContext);
    const { ingredients } = appState;
    const { updateTotal, deleteSelectedIngredient } = appActions

    const onPriceChangeHandler = (val) => {
        updateTotal(val)
    }
    const onItemDeleteHandler = (val) => {
        deleteSelectedIngredient(val)
    }
    return(
        <Fragment>
            <Box display='flex' flexDirection='row' justifyContent='space-between' paddingRight='35px'>
                <Box width='48px' height='48px' />
                <Typography style={{width: 80}} variant='h5'>Quantity</Typography>
                <Typography style={{width: 65}} variant='h5'>Total</Typography>
            </Box>
            <List>
                {
                    ingredients.map((item) => <CartItem  key={item.name} item={item} onPriceChange={onPriceChangeHandler} onItemDelete={onItemDeleteHandler}/>)
                }
            </List>
        </Fragment>
    )
}

export default CartList