import { Box, MenuItem, Select, Typography } from '@material-ui/core'
import React, {  useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const StoreLocations = ({selectedStoreLocation, onLocationSelect}) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    useEffect(() => {
        setSelectedLocation('')
    }, [selectedStoreLocation])

    const handleChange = (event) => {
        setSelectedLocation(event.target.value);
        const selected = selectedStoreLocation.filter((item) => item.city === event.target.value)
        onLocationSelect(selected[0])
    }

    return(
        <Box display='flex' flexDirection='column' marginTop={3}>
            <Typography variant='h6' gutterBottom>Location :</Typography>
            <Select value={selectedLocation} onChange={handleChange} variant='outlined'>
            {
                selectedStoreLocation.map(eachLocation => <MenuItem key={eachLocation.city} value={eachLocation.city}>{eachLocation.city} - {eachLocation.state}</MenuItem>)
            }
            </Select>
        </Box>
    )
}

StoreLocations.propTypes = {
    selectedStoreLocation: PropTypes.array,
    onLocationSelect: PropTypes.func
}

export default StoreLocations