import React from "react";
import "./content.css"




class Content extends React.Component{
    render() {
        return (
             <div className="content">
                <div className="img">
                   
                </div>
                <div className="malumotlar">
                    <div className="avatar">
                        
                    </div>
                    <div className="title">
                        <h3>New Apartment Nice Wiew</h3>
                        <p>Quincy St, Brooklyn, NY, USA</p>
                    </div>
                    <div className="itemlar">
                        <div className="data">
                            <div>rasm</div>
                            <p>4 Beds</p>
                        </div>
                        <div className="data">
                            <div>rasm</div>
                            <p>5 Baths</p>
                        </div>
                        <div className="data">
                            <div>rasm</div>
                            <p>1 Carage</p>
                        </div>
                        <div className="data">
                            <div>rasm</div>
                            <p>1200 Sq Ft</p>
                        </div>
                    </div>    
                </div>
                <div className="footer">
                    <div className="pirice">
                        <h4>$7,500/mo</h4>
                    </div>
                    <div className="btn">
                        <button>+</button>
                        <h4>1</h4>
                        <button>-</button>
                    </div>
                </div>
             </div>
        );
    }
}

export default Content