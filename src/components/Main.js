import React, {Component} from 'react';
import {Col, Row} from "antd";
import pic1 from "../images/pic1.png"
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import '../main.css'

class Main extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <div className="container">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>COVID-19 Update:</strong>
                     Our riders and employees are trained and sensitized on how to handle themselves,
                    parcels and people, in order to prevent the spread of the Covid-19 virus.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Row>
                    <Col span={8}>
                       <img width={200} height={400} src={pic1} alt={pic1}/>
                    </Col>
                    <Col span={16} className="parcels">
                        <center><h1>Parcel Delivery & Errands</h1></center>
                        <ol>
                            <li>Open the App and choose the Parcel Service</li>
                            <li>Enter the destination to deliver the parcel</li>
                            <li>Enter parcel receiver's phone number</li>
                            <li>When the driver arrives, hand over the parcel</li>
                           <li>Receiver acknowledges parcel delivery by entering the code that was sent earlier</li>
                        </ol>

                    </Col>
                </Row><br/>
            </div>
                <Row className="connect">
                    <div className="container">
                    <h1>Connecting Businesses & People</h1>
                        <div className="row">
                            <div className="col">
                                <button className="round-button btn btn-warning"><a href="/">Get in touch</a></button>
                            </div>
                            <div className="col">
                                <button className="round-button btn btn-warning"><a href="/">Join Us</a></button>
                            </div>
                        </div>
                    </div>
                </Row><br/>
                <div className="container">
                <Row className="whatwedo">
                    <Col span={16} >
                        <center><h3><strong>Boda Orda</strong></h3></center>
                        <center><h3>All connections at the touch of a button.</h3></center>
                        <h5>RELIABLE</h5>
                        <p>With courier motorcycles located in every location in Nairobi & Uganda,
                            we guarantee high satisfaction and reliability.</p>
                        <h5>SAFETY</h5>
                        <p> Your goods are safe with us, we insure and guarantee your goods will be delivered intact.</p>

                        <h5>SAVE TIME</h5>
                        <p>Get your goods delivered accross the city with-in 30minutes and track the package
                            on your smart-phone.
                            You and the recepient will be notified of the packages progress in real time too!</p>
                        <h5>IMPROVE LIVES</h5>
                        <p>By using our service you're giving business to the local transport industry.</p>
                        <button className="button btn btn-primary animated flip">Download App</button>
                    </Col>
                    <Col span={8}>
                        <img width={300} height={600} src={pic1} alt={pic1} style={{marginLeft:"50px"}}/>
                    </Col>
                </Row><br/>
            </div>
                <Row className="whoweare">
                    <div className="container">
                        <center><h1>Who we are</h1></center>
                   <p>At The  Boda Orda we are passionate about connecting you and your transport need
                       (ride, package delivery or store purchase). We do this by expanding your existing
                       network of riders through technology in a non-invasive and seamless manner.
                       Wherever you happen to be located, you can see the nearest list of riders for your ease of choice.
                       Click on a rider to see their particulars. This way, your interaction starts way before you decide
                       if they are the right fit for your need.</p>
                    </div>
                </Row>
        <MainFooter/>
            </div>
        );
    }
}

export default Main;