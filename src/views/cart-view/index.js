import { Box, Typography, useTheme } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import ViewContainer from '../../components/view-container'
import { AppContext } from '../../context/app-context'
import CartFooter from './cart-footer'
import CartList from './cart-list'

const CartView = () => {
    const theme = useTheme()
    const {  appActions } = useContext(AppContext);
    useEffect(() => {
        appActions.getIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <ViewContainer bgcolor={theme.palette.secondary.main}>
            <Typography variant='h4' style={{fontWeight: 600, textAlign: 'center'}}>My Cart</Typography>
            <Box width='100%' minWidth='450px' marginY={8} display='flex' flexDirection='column'>
                <CartList />
                <CartFooter />
            </Box>
        </ViewContainer>
    )
}

export default CartView