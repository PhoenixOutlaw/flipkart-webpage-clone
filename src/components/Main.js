import React, { useState } from 'react'
import '../css/main.css'
import { Image } from './main/Image'
import { Product } from './main/Product'
import { Productdetails } from './main/Productdetails'
export const Main = () => {
    const [sbwopt, setsbwopt] = useState([true,false,false,false])
    

    function Interested ({img,title,disc}){
        return(
            <div className="icnt">
                <img src={img}  alt="" />
                <div className="ir">
                    <h2>{title}</h2>
                    <h2 style={{color: 'gray',fontSize:"18px",fontWeight:"400"}}>Min {disc}% Off</h2>
                    <button>Shop Now</button>
                </div>
            </div>
        )
    }
    return (
        <div className="mcnt">
            <div className="mt">
           <div className="mtl">
               <Image/>
           </div>
           <div className="mtr">
               <Productdetails/>        
           </div>

            </div>

           <div className="mb">
               <div className="interested">
                   <h2 id="sech">You might be interested in </h2>
                   <div className="productlist">
                       <Interested 
                          img="https://rukminim1.flixcart.com/image/280/336/jpwxxu80/external-hard-drive/hdd/r/f/s/wd-wdbu6y0015bbk-wesn-original-imafcfqyjdue4hpf.jpeg?q=90"
                          title="External Hard Disks"
                          disc="30"
                       />
                       <Interested 
                          img="https://rukminim1.flixcart.com/image/280/336/k3g73bk0/keyboard/laptop-keyboard/t/e/x/dell-km117-original-imafmktgbfwxy8bp.jpeg?q=90"
                          title="Keyboards"
                          disc="20"
                       />
                      
                   </div>

                 
               </div>
               <div className="similar">
                   <h2 id="sech">Similar products</h2> 
                   <div className="productlist">
                   <Product img="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/screen-guard/screen-guard/g/s/0/apple-macbook-pro-m1-somtone-original-imag4jhqaxbprrgx.jpeg?q=70"
                             title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A" 
                             rating="4.7" 
                             reviews="458" 
                             price="₹1,09,990" 
                             disc="10%"
                             />
                   <Product img="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/screen-guard/screen-guard/g/s/0/apple-macbook-pro-m1-somtone-original-imag4jhqaxbprrgx.jpeg?q=70"
                             title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A" 
                             rating="4.7" 
                             reviews="458" 
                             price="₹1,09,990" 
                             disc="10%"
                             />
                   <Product img="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/screen-guard/screen-guard/g/s/0/apple-macbook-pro-m1-somtone-original-imag4jhqaxbprrgx.jpeg?q=70"
                             title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A" 
                             rating="4.7" 
                             reviews="458" 
                             price="₹1,09,990" 
                             disc="10%"
                             />
                             
                   </div>
               </div>
               <div className="boughtwith">
                  <h2 id="sech">Bought together</h2>
                  <div className="bwopt">
                      
                      <div id={sbwopt[0]&&"selected"} onClick={()=>setsbwopt([true,false,false,false])}><h5>Headphones</h5></div>
                      <div id={sbwopt[1]&&"selected"} onClick={()=>setsbwopt([false,true,false,false])}><h5>all Categories</h5></div>
                      <div id={sbwopt[2]&&"selected"} onClick={()=>setsbwopt([false,false,true,false])}><h5>Keyboards</h5></div>
                      <div id={sbwopt[3]&&"selected"} onClick={()=>setsbwopt([false,false,false,true])}><h5>Single Funtion Printers</h5></div>
                  </div>
                  <div className="productlist">
                   <Product img="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/screen-guard/screen-guard/g/s/0/apple-macbook-pro-m1-somtone-original-imag4jhqaxbprrgx.jpeg?q=70"
                             title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A" 
                             rating="4.7" 
                             reviews="458" 
                             price="₹1,09,990" 
                             disc="10%"
                             />
                   <Product img="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/screen-guard/screen-guard/g/s/0/apple-macbook-pro-m1-somtone-original-imag4jhqaxbprrgx.jpeg?q=70"
                             title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A" 
                             rating="4.7" 
                             reviews="458" 
                             price="₹1,09,990" 
                             disc="10%"
                             />
                   <Product img="https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/screen-guard/screen-guard/g/s/0/apple-macbook-pro-m1-somtone-original-imag4jhqaxbprrgx.jpeg?q=70"
                             title="APPLE MacBook Pro M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MYD82HN/A" 
                             rating="4.7" 
                             reviews="458" 
                             price="₹1,09,990" 
                             disc="10%"
                             />
                             
                   </div>
               </div>
           </div>
        </div>
    )
}
