import React from 'react'
import styled from 'styled-components';

 const Footer =() => (
    <FooterContainer className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                        {/* column2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                        {/* column3 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                        {/* column4 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Guider App- All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </FooterContainer>
    
)

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover{
    color: var(--mainLightGrey);
}

`;
