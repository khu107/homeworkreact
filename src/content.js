import React from "react";
import "./content.css"




class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            price: 7500
        }
    }
    render() {
        
        const plus = ()=>{
            
            this.setState({count: 1 + this.state.count})
            this.setState({price: 7500 + this.state.price})
        }
        const minus = ()=>{
            if(this.state.count > 1) this.setState({count:  this.state.count - 1 })
            if(this.state.price > 7500)this.setState({price: this.state.price - 7500})
        }
        return (
             <div className="content">
                <div className="img">
                <img src={this.props} className="img"/>
                </div>
                <div className="malumotlar">
                    <div className="avatar">
                        <img src=""></img>
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
                        <h4>${this.state.price}/mo</h4>
                    </div>
                    <div className="btn">
                        <button onClick={plus}>+</button>
                        <h4>{this.state.count}</h4>
                        <button onClick={minus}>-</button>
                    </div>
                </div>
             </div>
        );
    }
}

export default Content