import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Experince = () => {
    return (
        <Stack gap='20px'>
            <Box>
                <Typography variant='h5' fontWeight={600}>
                    Experience
                </Typography>
            </Box>
            <Box>
                <table width='100%'>
                    <thead>
                        <tr>
                            <th className='text-left'>Company name</th>
                            <th className='text-left'>Desigantion</th>
                            <th className='text-left'>Dtae</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left'>24h Developers</td>
                            <td>React Js Developer</td>
                            <td>1year</td>
                        </tr>
                        <tr>
                            <td className='text-left'>Bcoder.in</td>
                            <td>Front-End Developer</td>
                            <td>7 Month</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </Stack>
    )
}

export default Experince