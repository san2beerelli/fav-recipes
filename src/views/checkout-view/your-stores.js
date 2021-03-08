import { Box, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PropTypes from 'prop-types'

const YourStores = ({favStores, onStoreSelect}) => {
    const [selectedStore, setSelectedStore] = useState();

    const handleChange = (event, storeName) => {
        setSelectedStore(storeName);
        onStoreSelect(storeName)
    }

    return(
        <Box display='flex' flexDirection='column' marginTop={20}>
            <Typography variant='h6' gutterBottom>Order From Your Favorite Store :</Typography>
            <ToggleButtonGroup size="large" value={selectedStore} exclusive onChange={handleChange}>
                {
                    favStores.map((store) => (
                        <ToggleButton value={store.name}>
                            <img alt={store.name} src={store.image} width={60} height={60} />
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Box>
    )
}

YourStores.propTypes = {
    favStores: PropTypes.array,
    onStoreSelect: PropTypes.func
}

export default YourStores