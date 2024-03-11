import { Box, Typography } from '@mui/material'
import React from 'react'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import '../style/contact.scss'

const Contact = () => {
    return (
        <Box>
            <Typography variant='h5' fontWeight={600}>
                Contact
            </Typography>
            <div className="home4" id="brands">
                <div>
                    {/* <h1>Brands</h1> */}
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <a className='text-center' href="https://www.linkedin.com/in/tinku-saini-804a03258/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                                <p>Linkdin</p>
                            </a>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                            <a className='text-center' href="https://github.com/Tinku4007" target="_blank" rel="noopener noreferrer">
                                <AiFillAmazonCircle />
                                <p>github</p>
                            </a>
                        </div>

                        <div style={{ animationDelay: "0.1s" }}>
                            <a href="https://www.instagram.com/samarsaini4007/" target="_blank" rel="noopener noreferrer">
                                <AiFillInstagram />
                                <p>Instagram</p>
                            </a>
                        </div>

                        <div style={{ animationDelay: "0.1s" }}>
                            <a className='text-center' href="tel:7206781782" rel="noopener noreferrer">
                                <IoIosCall />
                                <p>Contact</p>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </Box>
    )
}

export default Contact