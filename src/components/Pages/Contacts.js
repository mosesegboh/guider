import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaPaperPlane} from 'react-icons/fa';

 class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                <div className="well well-sm">
                    <h3><strong>Our Location</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                <iframe title="mymap" src="https://www.google.com/maps/d/embed?mid=1B8NyzHDQkxnG4x_nEVnKkzue9PguqrKB" style={{
                    border: '0',
                    width: '100%',
                    height: '315px',
                    frameborder:'0',
                }}
                allowFullScreen></iframe>
                </div>
                    <div className="col-md-5">
                        <h4><strong>Contact</strong></h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Phone"/>
                                </div>
                                <textarea className="form-control" cols="30" placeholder="message"/>
                                <Link className="btn btn-outline-primary text-uppercase mt-1">
                                    <FaPaperPlane/>&nbsp;Send
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Contacts;
