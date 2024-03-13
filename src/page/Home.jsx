import { Box, Stack, Typography, Container, Button } from '@mui/material'
import React from 'react'
import TinkuSaini from "../assets/images/tinku saini.png"
import Experince from './Experince'
import Contact from './Contact'

const Home = () => {

  const skill = ["Html", "Css", "Bootstrap", "Tailwaind css", "Material ui", "React Js", "Angular Js"]

  return (
    <Stack paddingTop="50px">
      <Container>
        <Box display="flex" flexWrap="wrap" justifyContent='space-between'>
          <Box sx={{ width: { xs: "100%", md: "50%" } }} display='flex' flexDirection='column' gap='15px'>
            <Typography variant='h1'  sx={{ fontSize: { xs: "20px", lg: "40px" } }} fontWeight="600">
              Hi , I Am
            </Typography>
            <Typography variant='h1'  sx={{ fontSize: { xs: "20px", lg: "40px" } }} fontWeight="600">
              Tinku Saini
            </Typography>
            <Typography variant='h6'  sx={{ fontSize: { xs: "14px", lg: "40px" } }}>
              Front-End Developer
            </Typography>
            <Box>
              <Box>
                <Typography variant='h5'  fontWeight={600}>
                  Skills
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' gap='20px' flexWrap='wrap' paddingTop="15px" maxWidth='400px'>
                {skill?.map((item, i) => (
                  <Typography key={i} sx={{
                    boxShadow: '0 3px 3px 0 rgba(0,0,0,.15)',
                    backgroundColor:"#fff",
                    width: '30%',
                    padding: '10px',
                    cursor: 'pointer',
                    transition: '.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
          <Box  sx={{ width: { xs: "100%", md: "50%" } }} display="flex" justifyContent="flex-end"  position='relative' className="pic_design">
            <img className='w-[410px] h-[410px] rounded-full user-img' src={TinkuSaini} alt="" />
          </Box>
        </Box>

        {/* experince page  */}
        <Stack id="experince" paddingTop='50px'>
          <Experince />
        </Stack>
        {/* contact  */}
        <Stack id="contact" paddingTop='50px'>
          <Contact />
        </Stack>
      </Container>
    </Stack>
  )
}

export default Home