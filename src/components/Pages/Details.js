import React, { Component } from 'react';
import {InfoConsumer} from '../Context';
import { FaFacebookSquare,FaTwitterSquare,FaGooglePlusSquare,FaRedditSquare,FaWhatsappSquare,FaFacebookMessenger } from 'react-icons/fa';

 class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {
                    data=>{
                        const{
                            id,
                            headerTitle,
                            headerText,
                            headerSubTitle,
                            img,
                            maps,
                            description
                        } = data.detailInfo;

                    return (
                        // react fragment is basically a container
                        <React.Fragment>
                            <div class="container-fluid align-items-center">
                                <h1 class="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                                {/* social icons */}
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        <div className = "col-2">
                                            <FaFacebookSquare />
                                        </div>
                                        <div className = "col-2">
                                            <FaTwitterSquare />
                                        </div>
                                        <div className = "col-2">
                                            <FaGooglePlusSquare />
                                        </div>
                                        <div className = "col-2">
                                            <FaRedditSquare />
                                        </div>
                                        <div className = "col-2">
                                            <FaWhatsappSquare />
                                        </div>
                                        <div className = "col-2">
                                            <FaFacebookMessenger />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nav link */}
                            <div className="container">
                                {/* About Place Link */}
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About Place</a>
                                    </li>
                                    {/* Reviews Link */}
                                    <li className="nav-item">
                                        <a href="#reviews" className="nav-link active" role="tab" data-toggle="tab">Reviews</a>
                                    </li>
                                      {/* Map Link */}
                                      <li className="nav-item">
                                        <a href="#reviews" className="nav-link active" role="tab" data-toggle="tab">Map</a>
                                    </li>
                                </ul>

                            </div>
                        </React.Fragment>
                    )
                    }


                }
            </InfoConsumer>
        )
    }
}

export default Details;
