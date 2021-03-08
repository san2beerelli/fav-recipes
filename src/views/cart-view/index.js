import { Box, List, Typography, useTheme } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import ViewContainer from '../../components/view-container'
import { AppContext } from '../../context/app-context'
import CartFooter from './cart-footer'
import CartItem from './cart-item'

const CartView = () => {
    const theme = useTheme()
    const { appState, appActions } = useContext(AppContext);
    useEffect(() => {
        appActions.getIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { ingredients } = appState;
    const { updateTotal, deleteSelectedIngredient } = appActions

    const onPriceChangeHandler = (val) => {
        updateTotal(val)
    }
    const onItemDeleteHandler = (val) => {
        deleteSelectedIngredient(val)
    }
    return(
        <ViewContainer bgcolor={theme.palette.secondary.main}>
            <Typography variant='h4' style={{fontWeight: 600, textAlign: 'center'}}>My Cart</Typography>
            <Box width='100%' minWidth='450px' marginY={8} display='flex' flexDirection='column'>
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
                <CartFooter />
            </Box>
        </ViewContainer>
    )
}

export default CartView