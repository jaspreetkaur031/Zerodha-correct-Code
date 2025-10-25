import React from 'react';

function RightSection({
    productName,
    productDescription,
    learnMore,
    imageURL
}) {
    return ( 
       <div className='container rightsection-container'>
        <div className='row right-row'>
            <div className='col-6 col-right-left me-5'>
                <h1 className='mb-4'>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={learnMore} className='prlinks'>Learn more →</a>
                </div>
            </div>
            <div className='col-6 col-right-right ms-5'>
                 <img src={imageURL} />
            </div>
        </div>
       </div>
     );
}

export default RightSection;