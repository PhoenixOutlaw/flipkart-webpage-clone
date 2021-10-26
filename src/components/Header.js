import React from 'react'
import '../css/header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Header = () => {
    return (
        <div className="hcnt">
            <div className="ht">
                <div className="ht1">
                    <div className="htl">
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
                    <h6 style={{ margin:0,color:"white"}}>Explore <span style={{color:"gold"}}>Plus</span></h6>
                    </div>

                    <div className="hts">
                        <input type="text" placeholder="Search for products, brands and more" />
                        <SearchIcon/>
                    </div>
                </div>
                <div className="ht2">
                    <Button id="hbtn" style={{color:"#2874f0",backgroundColor:"white",width:"100px",borderRadius:0}}>Login</Button>
                    <Button id="hbtn" style={{color:"white"}} endIcon={<ArrowDropDown/>}>More</Button>
                    <Button id="hbtn" className="show" style={{color:"white"}} ><ShoppingCartIcon/></Button>
                </div>
            </div>
            <div className="hb">
                <div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Electronics</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> TVs & Appliances</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Men</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Women</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Baby & Kids</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Home & Furniture</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Sports,Books & More</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Flights</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                <div className="hbbtn">
                    <h5 style={{margin:0,fontWeight:"500"}}> Offer Zone</h5>
                    <ArrowDropDown style={{color:"gray"}}/>
                </div>
                </div>
            </div>
            
        </div>
    )
}
