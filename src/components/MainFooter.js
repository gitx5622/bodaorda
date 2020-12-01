import React, {Component} from 'react';
import {Col, Layout, Row} from "antd";

const {Footer } = Layout;

class MainFooter extends Component {
    render() {
        return (
            <div>
                <Footer style={{ textAlign: 'center', color:"white", backgroundColor:"rgb(52, 71, 84)" }}>
                    <Row>
                        <Col sm={6} xs={24}>
                            <h3 className="text-white">Boda Orda</h3>
                            <h5>
                            Jobs<br/>
                            Gate No. 35, Convent Road,
                            0741 790 736
                            supportke@bodaorda.com

                            Lavington, Nairobi

                            </h5>
                        </Col>
                        <Col sm={6} xs={24}>
                            <h5>
                                <h3 className="text-white">Home</h3>
                                E-commerce<br/>
                                Enterprise<br/>
                                Freight<br/>
                                Pricing<br/>
                                API

                            </h5>
                        </Col>
                        <Col sm={6} xs={24}>
                            <h5>
                                <h3 className="text-white">Careers</h3>
                                Blog<br/>
                                Drivers<br/>
                                Owner Login
                            </h5>
                        </Col>
                        <Col sm={6} xs={24}>
                            <h5>
                                <h3 className="text-white">Contact Us</h3>
                                Convent Road<br/>
                                0741 790 736<br/>
                                supportke@bodaorda.com
                                <br/><br/>
                                Lavington, Nairobi

                            </h5>
                        </Col>
                    </Row>
                </Footer>
            </div>
        );
    }
}

export default MainFooter;