import React, {Component} from 'react';
import {Col, Layout, Row} from "antd";

const {Footer } = Layout;

class MainFooter extends Component {
    render() {
        return (
            <div>
                <Footer style={{ textAlign: 'center', color:"white", backgroundColor:"#467379" }}>
                    <Row>
                        <Col span={6}>
                            <h1>Boda Orda</h1>
                            <h5>
                            Jobs<br/>
                            Gate No. 35, Convent Road,
                            0741 790 736
                            supportke@bodaorda.com

                            Lavington, Nairobi

                            </h5>
                        </Col>
                        <Col span={6}>
                            <h5>
                                <h3>Home</h3>
                                E-commerce<br/>
                                Enterprise<br/>
                                Freight<br/>
                                Pricing<br/>
                                API

                            </h5>
                        </Col>
                        <Col span={6}>
                            <h5>
                                <h3>Careers</h3>
                                Blog<br/>
                                Drivers<br/>
                                Owner Login
                            </h5>
                        </Col>
                        <Col span={6}>
                            <h5>
                                <h3>Contact Us</h3>
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