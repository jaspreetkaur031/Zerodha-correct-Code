import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
       <div className='container main-left-container'>
        <div className='row left-row'>
            <div className='col-6 col-left-left'>
                <img src={imageURL} />
            </div>

            <div className='col-6 col-left-right'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo} className='plinks me-5'>Try demo →</a>
                    <a href={learnMore} className='plinks ms-4'>Learn more →</a>
                </div>
               
               <div className='gaimg-div'>
                <a href={googlePlay} className='gaimg '><img src='mediaimages\googlePlayBadge.svg' /></a>
                <a href={appStore} className='gaimg ms-3' ><img src='mediaimages\appstoreBadge.svg' /></a>
               </div>

                 </div>
        </div>
       </div>
     );
}

export default LeftSection;