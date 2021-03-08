import { Box } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

const ViewContainer = ({ bgcolor, children}) => {
    return(
        <Box
            width='100%'
            height='100%'
            bgcolor={bgcolor}
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingTop={10}
        >
            <Box display='flex' flexDirection='column'>
                {children}
            </Box>
        </Box>
    )

}

ViewContainer.propTypes = {
    bgcolor: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default ViewContainer