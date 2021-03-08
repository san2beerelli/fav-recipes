import { Box, Button, useTheme } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import ViewContainer from '../../components/view-container'
import { AppContext } from '../../context/app-context';
import StoreLocations from './store-locations';
import YourStores from './your-stores';

const CheckoutView = () => {
    const theme = useTheme()
    const { appState, appActions } = useContext(AppContext);
    useEffect(() => {
        appActions.getFavStores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const {favStores, selectedStoreLocation, deliveryHours} = appState
    const {getStoreLocations, setDeliveryHours} = appActions

    const onStoreSelectHandler = (storeName) => {
        setDeliveryHours(0)
        getStoreLocations(storeName)
    }
    const onLocationSelectHandler = (location) => {
        setDeliveryHours(location.hours)
    }
    return(
        <ViewContainer
            bgcolor={theme.palette.background.default}>
            <YourStores favStores={favStores} onStoreSelect={onStoreSelectHandler}/>
            {
                selectedStoreLocation.length > 0 ? (
                    <StoreLocations
                        selectedStoreLocation={selectedStoreLocation}
                        onLocationSelect={onLocationSelectHandler}
                        />
                    ) : null
            }
            <Box display='flex' marginTop={4} flexDirection='row-reverse'>
                {deliveryHours ? <Button variant='contained' color='primary'>Checkout</Button> : null}
            </Box>
        </ViewContainer>
    )
}

export default CheckoutView