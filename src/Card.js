import React from 'react'
import ImageHelper from './helper/ImageHelper';

    const Card = ({product}) => {
        const productName=product?product.mission_name:'NA'
        const productFlightNo=product?'#'+product.flight_number:'NA'
        const productImage=product?product.links.mission_patch:''
        const productLaunchYear=product?product.launch_year:''
        const launchSuccess=product?product.launch_success:false
        const landing=product?product.launch_landing:false

        //console.log(productImage)
        return (
          <div className="card">
           <div className="card-body">
              <ImageHelper imageURL={productImage}/>
              <p className="lead font-weight-normal text-info">
               {productName} {productFlightNo}
              </p>
             
              <div className="row">
                <div className="col-12">
                <span className="font-weight-bold">Launch Year: </span>{productLaunchYear} <br/>
                <span className="font-weight-bold">Successful Launch: </span>{launchSuccess?"true":"false"} <br/>
                <span className="font-weight-bold">Successful Landing: </span>{landing?"true":"false"} <br/>
                
                </div>
              </div>
            </div>
          </div>
        );
      };

      export default Card;