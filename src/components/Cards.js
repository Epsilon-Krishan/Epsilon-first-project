import React from 'react'
// import img from '../Assets/download.jpg'
const Cards = ({ items }) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {items.map((item) => {
                    return (
                        <>
                            <div className="card col-md-4 m-2 pt-2">
                                <div className="row">
                                    <div className="col-sm-4 pl-3">
                                        <img src={item.image} className="img-fluid p-1"></img>
                                    </div>
                                    <div className="col-sm-8">
                                        <h4 className="image-title">
                                        {item.title}
                                        </h4>
                                        <p>{item.desc}</p>
                                        <h4 className="" style={{color:"#0C2074"}}><b>{item.points.basePointsToCharge} Points</b></h4>
                                        <h5><del><b>{item.points.originalBasePointsToCharge} Points</b></del></h5>
                                        <button className="btn btn-danger">Detail</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Cards;

