import React from 'react'
import '../css/footer.css'
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';

export const Footer = () => {
    const about = [
        <a href=" ">Contact Us </a>,
        <a href=" ">About Us</a>,
        <a href=" ">Careeres </a>,
        <a href=" ">Flipkart Stories</a>,
        <a href=" ">Press</a>,
        <a href=" ">Flipkart</a>,
        <a href=" ">Wholesale</a>,
        <a href=" ">Coprate</a>,
        <a href=" ">Information</a>,
    ];
    const help = [
        <a href=" ">Payments</a>,
        <a href=" ">Shipping</a>,
        <a href=" ">Cancellation &</a>,
        <a href=" ">Returns</a>,
        <a href=" ">FAQ</a>,
        <a href=" ">Report</a>,
        <a href=" ">Infringement</a>,
        <a href=" ">Coprate</a>,
        <a href=" ">Information</a>,
    ];
    const social = [
        <a href=" ">Facebook</a>,
        <a href=" ">Twitter</a>,
        <a href=" ">YouTube</a>,
    ]
    const mailus = [
        <a href=" ">Flipkart Internet Private Limited,</a>,
        <a href=" ">Buildings Alysse,Begonia &</a>,
        <a href=" ">Clove Embassy Tech Village,</a>,
        <a href=" ">Outer Ring Road, Devarabeesanahalli Village,</a>,
        <a href=" ">Bengaluru 560103</a>,
        <a href=" ">Karnataka,India</a>,
    ]
    const officeaddress = [
        <a href=" ">Flipkart Internet Private Limited,</a>,
        <a href=" ">Buildings Alysse,Begonia &</a>,
        <a href=" ">Clove Embassy Tech Village,</a>,
        <a href=" ">Outer Ring Road, Devarabeesanahalli Village,</a>,
        <a href=" ">Bengaluru 560103</a>,
        <a href=" ">Karnataka,India</a>,
        <a href=" ">CIN : U51109KA2012PTC066107</a>,
        <a href=" ">Telephone: 1800 202 9898 </a>,
       
    ]

    function Fop({title , opt}){
        return(
            <div className="clmn">
                    <h5 style={{ margin:"0",color:"gray"}}>{title}</h5>
                    <ul>
                        {opt.map((opt)=>(
                            <li>{opt}</li>
                        ))}
                    </ul>
                    </div>
        )
    }
    function Fb2opt({Icon, title, img}){
        return (
            <div className="fb2opt">
                {Icon&&<Icon/>}
                {title&&<h5 style={{ margin:"0"}}>{title}</h5>}
                {img&& <img src={img} alt="" /> }
            </div>
        )
    }


    return (
        <div className="fcnt">
            <div className="ft">
                <h5>Top Stories <span style={{fontWeight: '490',color:"black"}}>Brand Directory</span> </h5>
                <h5>MOST SEARCHED IN COMPUTERS & ACCESSORIES: ALTEC LANSING 2.1|Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, omnis dolorem? Et necessitatibus vitae qui veritatis labore. Dicta necessitatibus magnam deserunt, distinctio quos, illo modi quam sint inventore numquam assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias labore doloribus itaque odio illum eum. Nisi similique, rerum est possimus quia vero voluptatem, nostrum laudantium et debitis quos? Tempore!</h5>
            </div>
            <div className="fb">
                <div className="fb1">
                    <Fop title="ABOUT" opt={about}/>
                    <Fop title="HELP" opt={help}/>
                    <Fop title="SOCIAL" opt={social}/>
                    <span style={{display: 'flex',borderLeft:"solid gray thin",marginLeft:"20px",height:"fit-content"}}>
                    <Fop title="Mail Us" opt={mailus}/>
                    </span>
                    <Fop title="Registered Office Address:" opt={officeaddress}/>
                    
                </div>
                <div className="fb2">
                    <Fb2opt Icon={WorkIcon} title="Sell On Flipkart"/>
                    <Fb2opt Icon={StarsIcon} title="Sell On Flipkart"/>
                    <Fb2opt Icon={CardGiftcardIcon} title="Sell On FlipkFlipkart"/>
                    <Fb2opt Icon={HelpIcon} title="Sell On FlipkFlipkart"/>
                    <Fb2opt  title="© 2007-2021 Flipkart.com"/>
                    <Fb2opt  img="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"/>
                </div>
            </div>
            
        </div>
    )
}
