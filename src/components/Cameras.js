import React from 'react'

const Cameras = () => {
    return (
        <div className="container mt-3">
            <p style={{ color: "#405092" }}>Home/ Merchandise/ Electronics/ <b>Cameras</b></p>
            <div className="text-center ">
                <h2 style={{ color: "#555555" }}><b>Cameras</b></h2>
            </div>
            <div className="row text-center d-flex justify-content-around mt-5">
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">
                         instant
                     </div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">
                         DSLR
                         </div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">
                         Convenience security <br/>&collision avoidance
                     </div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">Action</div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">
                        Camcoders
                     </div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">Drones</div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">
                         SuperMega Pixel
                     </div>
                     <div className="bdr col-6 col-md-4 mb-3 mr-2">Wearebles</div>
            </div>
            </div>
    )
}

export default Cameras;
