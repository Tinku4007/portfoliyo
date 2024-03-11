import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const data =
    [
        {
            name: "Home", to: "/portfoliyo"
        },
        {
            name: "Work", to: "/portfoliyo"
        },
        {
            name: "Experience", to: "/portfoliyo/#experince"
        },
        {
            name: "Service", to: "/portfoliyo"
        },
        {
            name: "Contact", to: "/portfoliyo/#contact"
        },
    ]

const Header = () => {
    return (
        <header className='bg-pink-50 p-2'>
            <Container>
                <Stack flexDirection='row' justifyContent='space-between' >
                    <Box>
                        <Typography variant='h5' fontSize='18px' fontWeight={600}>
                            Tinku SaiNi
                        </Typography>
                    </Box>
                    <Box>
                        <ul className='flex items-center gap-10'>
                            {data?.map((item, i) => (
                                <li key={i}>
                                    <HashLink to={item.to}>
                                        <span>{item.name}</span>
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box>
                        <Typography variant='body1' className='text-sm'>
                            Email
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </header>
    )
}

export default Header