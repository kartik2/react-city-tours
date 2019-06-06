import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
    state={
        showInfo: false
    };
    handleInfo=()=>{
        this.setState(
            {showInfo: !this.state.showInfo}
        )
    };
    render() {
        console.log(this.showInfo);
        const {tour}=this.props;
        const {removeTour}=this.props;
        return (
            <article className = "tour">
                <div className="img-container">
                    <img 
                    
                    src= {tour.img}
                    alt=" " />
                
                <span className="close-btn" onClick={()=>removeTour(tour.id)}>
                <i className="material-icons">
                    cancel
                </i>
                </span>
                </div>
                <div className="tour-info">
                    <h3>{tour.city}</h3>
                    <h4>{tour.name}</h4>
                    <h5 onClick={this.handleInfo}>
                        info 
                        <span>
                        <i className="fas fa-chevron-circle-down"></i>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{tour.info}</p>}
                </div>
            </article>
        )
    }
}
