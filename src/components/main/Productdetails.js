import React from 'react'
import './css/productdetails.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Checkbox } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';



export const Productdetails = () => {

    const offer = [  
        `Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C`,
        `Bank Offer15% Instant discount on first Pay Later order of ₹500 and aboveT&C`,
        `Partner OfferFlat Discount of 20% on all coding courses on CodingalKnow More`,
        `Partner OfferGST Invoice Available! Save up to 28% for business purchasesKnow More`,
    ]

    const specifications=[
        {
            heading:"General",
            content:
            [  
              {title:"Sales Packages",
               desc:"Lorem ipsum dolor sit amet, consectetur adip"},
           
              {title:"Sales Packages",
               desc:"Lorem ipsum dolor sit amet, consectetur adip"},
           
              {title:"Sales Packages",
               desc:"Lorem ipsum dolor sit amet, consectetur adip"},           
            ]
        },
        {
            heading:"Something else",
            content:
            [  
              {title:"Sales Packages",
               desc:"Lorem ipsum dolor sit amet, consectetur adip"},
           
              {title:"Sales Packages",
               desc:"Lorem ipsum dolor sit amet, consectetur adip"},
           
              {title:"Sales Packages",
               desc:"Lorem ipsum dolor sit amet, consectetur adip"},           
            ]
        },
    ]


 function Offer({title}){
     return(
         <div id="offer" >
             <LocalOfferIcon/>
             <p>{title}</p>
         </div>
     )
 }

 function Specification({speci}){
     return(
         <div id="spcnt">
             <h3 style={{marginBottom:"3px",fontWeight:"400",fontSize:"18px"}}>{speci?.heading}</h3>
             {speci.content.map((h)=>(
                 <div className="spl">
                 <div className="splr">
                     <h4 style={{fontWeight:"500",margin:"7px"}}>{h?.title}</h4>
                 </div>
                 <div className="spll">
                     <h4 style={{fontWeight:"450",margin:"7px",color:"black"}}>{h?.desc}</h4>
                 </div>
                 </div>
             ))}
         </div>
     )
 }

 function Review({stars,title,desc,time}){
     return(
        <div className="revcnt">
        <div className="revh">
        <div className="pr1" >
                   <span>
                       <p>{stars}</p>
                       <StarIcon/>
                   </span>
        </div>          
        <h3>{title}</h3>   
        </div>
        <p>{desc}</p>
        <div className="revf">
            <p>Flipkart <span><CheckCircleRoundedIcon style={{height: '15px',width:"15px",color:"gray",margin:"5px"}}/>Certified Buyer</span> {time}</p>
            <span>
            <span><ThumbUpAltRoundedIcon style={{height: '15px',width:"15px",color:"gray",margin:"5px"}}/> 192</span>
            <span><ThumbDownRoundedIcon style={{height: '15px',width:"15px",color:"gray",margin:"5px"}}/> 34</span>
            </span>
            </div>
    </div>
     )
 }
 function Qna({q,ans,auther}){
     return(
         <div className="qnacnt">
             <h3>Q:{" "}{q}</h3>
             <h3>A:{" "}{ans}</h3>
             <p style={{fontSize:"11px",fontWeight:"500",padding:"5px",color:"gray"}}>{auther}</p>
             <div className="revf" style={{opacity:"80%"}}>
            <p><span><CheckCircleRoundedIcon style={{height: '15px',width:"15px",color:"gray",margin:"5px"}}/>Certified Buyer</span></p>
            <span>
            <span><ThumbUpAltRoundedIcon style={{height: '15px',width:"15px",color:"gray",margin:"5px"}}/> 192</span>
            <span><ThumbDownRoundedIcon style={{height: '15px',width:"15px",color:"gray",margin:"5px"}}/> 34</span>
            </span>
            </div>

         </div>
     )
 }

    return (
        <div className="prdcnt">
            <div className="prdh">
                <p>Home > Computers > Laptops > Apple</p>
                <div>
                <span>
                    <Checkbox/>
                    Compare
                </span>
                <span>
                    <ArrowForwardIcon/>
                    Share
                </span>
                </div>
            </div>
            <div className="prd1">

                <h2>APPLE MacBook Pro M1 - (8 GB/512 GB SSD/Mac OS Big Sur) MYD92HN/A  (13.3 inch, Space Grey, 1.4 kg)</h2>
                <div className="pr1" style={{width:"55%"}}>
                    <span>
                        <p>4.6</p>
                        <StarIcon/>
                    </span>
                    <p style={{fontSize:"13px",}}>290 Rating & 36 Reviews</p>
                   <img height="21px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
                </div>

                <h2 style={{fontSize:"29px",fontWeight:"600",marginTop:"10px"}}>₹1,34,990</h2>

                <div className="availoffer">
                    <h4>Available Offers</h4>
                    {offer.map((offer)=>(
                        <Offer title={offer}/>
                    ))}
                </div>
                <form action="" className="form">
                    <span style={{backgroundColor:"#f5faff",borderBottom:"rgb(235, 185, 185,0.5) solid thin"}}><input type="radio" style={{marginRight:"9px"}}/> <h4>Buy Without Exchage</h4><h4 style={{marginLeft:"auto"}}>₹134,990</h4></span>
                    <span><input type="radio" style={{marginRight:"9px"}}/> <h4>Buy With Exchage</h4><h4  style={{marginLeft:"auto"}}>Up to ₹18,100 off</h4></span>
                    <p style={{fontSize:"13px",textAlign:"center",color:"red",paddingBottom:"10px"}}>Enter pincode to check if exchange is available</p>
                </form>
                <div className="specifications"> 
                <h2>Specifications</h2>

                {specifications.map((speci)=>(
                    <Specification speci={speci}/>
                ))}

                </div>
                <div className="reviews">
                    <h2>Ratings & Reviews</h2>
                    <Review 
                        title="Good" 
                        stars="4" 
                        desc="Lorem ipsum dolor sit amet, consectetur adip"
                        time="10 months"
                    />
                    <Review 
                        title="Good" 
                        stars="4" 
                        desc="Lorem ipsum dolor sit amet, consectetur adip"
                        time="10 months"
                    />
                    <Review 
                        title="Good" 
                        stars="4" 
                        desc="Lorem ipsum dolor sit amet, consectetur adip"
                        time="10 months"
                    />
                </div>
                <div className="qna">
                    <h2>Question and Answers</h2>
                    <Qna q="Can I use windows in this laptop as an another option ?"
                         ans="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
                         auther="Kaushal Subudhi"
                    />
                    <Qna q="Can I use windows in this laptop as an another option ?"
                         ans="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
                         auther="Kaushal Subudhi"
                    />
                    <Qna q="Can I use windows in this laptop as an another option ?"
                         ans="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
                         auther="Kaushal Subudhi"
                    />
                    <Qna q="Can I use windows in this laptop as an another option ?"
                         ans="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
                         auther="Kaushal Subudhi"
                    />
                        
                </div>
                
            </div>
            
        </div>
    )
}
