import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Drawer from '@mui/material/Drawer';
import logo from '../assets/images/tink-removebg-preview.png';
import { GiHamburgerMenu } from "react-icons/gi";
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
    const [openDrawer, setOpenDrawer] = React.useState(false)
    return (
        <>
            <header className='p-2 '>
                <Container>
                    <Stack flexDirection='row' alignItems="center" justifyContent='space-between' >
                        <Box>
                            <Typography variant='h5' fontSize='18px' fontWeight={600}>
                                <img className='h-16 object-cover' src={logo} alt="" />
                            </Typography>
                        </Box>
                        <Box className='header'>
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
                        <Box className="toggle">
                            <Typography  onClick={() => setOpenDrawer(true)} variant='body1' className='text-sm'>
                                <GiHamburgerMenu/>
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </header>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} className=' header-mobile'>
            <header className='p-2 w-[50vw]'>
                <Container>
                    <Stack justifyContent='space-between' gap="10px" >
                        <Box>
                            <Typography variant='h5' fontSize='18px' fontWeight={600}>
                                Tinku SaiNi
                            </Typography>
                        </Box>
                        <Box>
                            <ul className='flex flex-col gap-3'>
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
                            <Typography onClick={() => setOpenDrawer(true)} variant='body1' className='text-sm'>
                                Email
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </header>
            </Drawer>
        </>
    )
}

export default Header