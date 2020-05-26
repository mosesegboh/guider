import React, { Component } from 'react';
import {InfoConsumer} from '../Context';
import { FaFacebookSquare,FaTwitterSquare,FaGooglePlusSquare,FaRedditSquare,FaWhatsappSquare,FaFacebookMessenger } from 'react-icons/fa';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import Reviews from '../Reviews'


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
                            title,
                            maps,
                            description
                        } = data.detailInfo;

                    return (
                        // react fragment is basically a container
                        <React.Fragment>
                            <HeaderDetails class="container-fluid align-items-center">
                                <h1 class="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                                {/* social icons */}
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                    <IconContext.Provider value={{ color: "blue",size:"2.5rem", className: "global-class-name" }}>
                                        <div className = "col-2">
                                            <FaFacebookSquare />
                                        </div>
                                    </IconContext.Provider>
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
                            </HeaderDetails>
                            {/* nav link */}
                            <div className="container">
                                
                                {/* About Place Link */}
                                <ul className="nav nav-tabs" id="myTab">
                                    <li className="nav-item">
                                        <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About Place</a>
                                    </li>
                                    {/* Reviews Link */}
                                    <li className="nav-item">
                                        <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                                    </li>
                                      {/* Map Link */}
                                      <li className="nav-item">
                                        <a href="#map" className="nav-link" role="tab" data-toggle="tab">Map</a>
                                    </li>
                                </ul>
                                {/* tab pane */}
                                <div className="tab-content mb-5" id="myTabContent" >
                                    {/* About place tab */}
                                    <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel" >
                                    <h2 class="mb-3">{title}</h2>
                                    <p>{description}</p>
                                    <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                                    </div>
                                    {/* Reviews */}
                                    <div className="tab-pane" id="reviews" role="tabpanel">
                                        <Reviews/>
                                    </div>
                                     {/* Map */}
                                     <div className="tab-pane" id="map" role="tabpanel">
                                        <iframe  title={title}
                                            src={maps} 
                                            style={{border: '0',
                                            height: '28.125rem',
                                            width: '100%',
                                            frameborder: '0'
                                        }}
                                    ></iframe>
                                    </div>
                                </div>  
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

const HeaderDetails = styled.header`
    background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
    height: 100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align: center;

    h1{
        padding-top: 10%;
    }

    h4{
        color: var(--mainDark);
    }

    p{
        padding-left: 10%;
        padding-right: 10%;
        margin-bottom: 10%;
        color: var(--mainDark);
    }

    i{
        font-size: 1.875rem;
        color: var(--mainDark);
    }

    i:hover{
        color: var(--mainBlue);
        cursor: pointer;
    }

    .nav-item{
        height: 18.75rem;
    }

    @media(max-width: 760px){
        h1,h4{
            color: var(--mainWhite);
        }
    }
`;
