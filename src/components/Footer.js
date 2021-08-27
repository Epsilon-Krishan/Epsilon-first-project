import React from 'react';
import brand from '../Assets/Group5.png';
const Footer = () => {
    return (
        <div className="border footer text-white">

            <footer className="page-footer font-small  pt-4 container">
                <div className="container-fluid text-center ">
                    <div className="row justify-content-between">
                        <div className="col justify-content-around">
                            <ul className="list-unstyled footer-list text-start">
                                <li>
                                    <a href="#!">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#!">Program Rules</a>
                                </li>
                                <li>
                                    <a href="#!">FAQ</a>
                                </li>
                                <li>
                                    <a href="#!">Privacy</a>
                                </li>
                            </ul>

                        </div>
                        {/* <hr className="clearfix col w-100 pb-3" /> */}
                        <div className="col mt-md-0 mt-3">
                            <img src={brand}/>
                        </div>

                       


                    </div>
                </div>

            <hr style={{ border:" 1px solid white"}}></hr>
            <div className="footer-copyright py-3">© 2019 U.S Bank
            </div>
            <p>The Creditor and issuer of your card is U.S Bank National Association,pursuant to a license from Visa U.S.A Inc</p>
            </footer>
        </div >
    )
}

export default Footer
