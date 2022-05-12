import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const CircularLoading: React.FC = () => {
  return (
    <Box py={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}

export default CircularLoading
