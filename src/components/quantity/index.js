import { Box, IconButton, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const QuantityPicker = ({ onChange, value, onDelete }) => {
    const [quantity, setQuantity] = useState(value)

    const onIconClickHandler = (type) => {
        let updatedQuantity;
        if(type === 'decrease' && quantity >= 0){
            updatedQuantity = quantity - 1
        } else if(type === 'increase'){
            updatedQuantity = quantity + 1
        }
        if(updatedQuantity >= 0){
            setQuantity(updatedQuantity)
            onChange({ type, updatedQuantity})
        }
    }

    return(
        <Box
           display='flex'
            flexDirection='row'
            alignItems='center'
        >
            <IconButton size='small' onClick={() => onIconClickHandler('decrease')}>
                <RemoveIcon />
            </IconButton>
            {
                quantity !== 0 ?
                (
                    <TextField
                        variant='outlined'
                        inputMode='numeric'
                        value={quantity}
                        size='small'
                        style={{ marginLeft: 10, marginRight: 10, width: 50, textAlign: 'center'}}
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                    />
                ) :
                (<Box width='50px' height='40px' marginX='10px' display='flex' alignItems='center' justifyContent='center'>
                <IconButton onClick={onDelete}>
                  <DeleteIcon color='error'/>
                </IconButton>
                </Box>)
            }

            <IconButton size='small' onClick={() => onIconClickHandler('increase')}>
                <AddIcon />
            </IconButton>
        </Box>
    )

}

QuantityPicker.defaultProps = {
    value: 1
}

QuantityPicker.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.number,
    onDelete: PropTypes.func
}

export default QuantityPicker