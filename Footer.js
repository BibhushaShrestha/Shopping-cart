import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div ClassName="col">
                        
                        <h4>T͙i͙n͙y͙ ͙T͙r͙e͙a͙s͙u͙r͙e͙s͙</h4>
                        <ul className="list-unstyled">
                            <li>01-55-20-237, 9841446288</li>
                            <li>Kumaripati,Lalitpur</li>
                            <li>bibhushashrestha944@gmail.com</li>
                        </ul>
                        
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Tiny Treasures Inc| All right reserved | Terms of Service | Privacy

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
