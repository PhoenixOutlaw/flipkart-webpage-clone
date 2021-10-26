import { Button } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './css/imagep.css'

export const Image = () => {
    const [itemimg, setitemimg] = useState(
        ["https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/e/6/n/apple-original-imafxfyq4agsgysn.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/e/6/n/apple-original-imafxfyq83sftaay.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/e/6/n/apple-original-imafxfyqhssmzarv.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/e/6/n/apple-original-imafxfyqkmv9cwp6.jpeg?q=70",
         "https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/e/6/n/apple-original-imafxfyq35eywzty.jpeg?q=70",
        ]
    )
    const [currentpre, setcurrentpre] = useState(itemimg[0])

    
    return (
        <div className="precnt">

        <div className="prpreview">
            <div className="aip">
                {itemimg.map((img) => (
                    <>
                    <img className={img===currentpre?"currentpre":"proimg"} src={img} alt="" onMouseOver={() =>{setcurrentpre(img)}}/>
                     </>))}
            </div>
            <div className="ip">
                {console.log(currentpre)}
                <img src={currentpre} alt="" />
            </div>
            
        </div>
        <div className="ibtns">
            <Button id="ibtn" style={{backgroundColor:"#ff9f00"}} startIcon={<ShoppingCartIcon/>}> <h4>ADD TO CART</h4></Button>
            <Button id="ibtn" style={{backgroundColor:"#fb641b"}} startIcon={<FlashOnIcon/>}> <h4>BUY NOW</h4></Button>
        </div>
        </div>
    )
}
