import { Box, Typography, useTheme } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ icon='🍞', onDelete}) => {
    const theme = useTheme()
    return(
        <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            border={2}
            borderColor={theme.palette.primary.main}
            borderRadius={12}
            width={48}
            height={48}
            padding={1}
        >
            <Typography variant='h4'>
             {icon}
            </Typography>
        </Box>
    )

}

Product.propTypes = {
    icon: PropTypes.string
}

export default Product