import React from 'react'
import './css/product.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Product = ({img, title,rating,reviews,price,disc}) => {
    return (
        <div className="procnt">
            <FavoriteIcon id="like"/>
            <img src={img} alt="" />
            <div className="prinfo">
                <h3 className="prn">{title}</h3>
                <div className="pr1">
                    <span>
                        <p>{rating}</p>
                        <StarIcon/>
                    </span>
                    <p>({reviews})</p>
                   <img height="21px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
                </div>
                <div className="pr2">
                    <p>{price}</p>
                </div>
                <div className="prdisc">
                    <p>{disc} off</p>
                </div>
            </div>
        </div>
    )
}
