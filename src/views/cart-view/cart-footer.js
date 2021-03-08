import { Box, Divider, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { Fragment } from 'react'
import { AppContext } from '../../context/app-context'


const CartFooter = () => {

    const { appState } = useContext(AppContext);
    const { totalPrice, deliveryHours } = appState;

    return(
        <Fragment>
            <Box display='flex' flexDirection='column' padding={3}>
                <Divider style={{width: 400}} />
                <Box display='flex' flexDirection='row' justifyContent='space-between' marginTop={2}>
                    <Typography variant='h6'>Sub Total  </Typography>
                    <Typography variant='h5' style={{width: 75}}>${totalPrice}</Typography>
                </Box>
            </Box>
            {
                deliveryHours ? <Typography variant='subtitle1' style={{marginLeft: 25}}>Expected Delivery : {deliveryHours} Hours </Typography> : null
            }
        </Fragment>
    )
}

export default CartFooter