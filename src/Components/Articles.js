import React from 'react'

const Articles =(props)=> {
 
    let {title,description,imageurl,newsUrl,author,time,source}=props;
    return (
      <div className='container my-4'>
        <div className="card" style={{width: "18rem"}}>
          
  <img src={imageurl?imageurl:"https://www.reuters.com/resizer/_a7kut6cSvnV77Go5AWi2zD_co4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/67S6KZPNQRP73NUVXMS77OOKII.jpg"} className="card-img-top" alt="img not found" /><span className="badge bg-info text-dark">{!source?"Unknown":source}</span>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">Author: {!author?" Unknown":author}<br/> Time: {new Date(time).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Readmore</a>
  </div>
</div>
      </div>
    )
  
}

export default Articles;