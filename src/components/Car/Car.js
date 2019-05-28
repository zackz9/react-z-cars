import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Car.scss";


class Car extends React.Component {
  state ={
    showInfo:false
  };

  handleInfo= () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render () {

    const{id,marque,img,model,info} = this.props.car;
    const{removeCar} = this.props;

    return (
      <article className="car">
        <div className="img-container">
          <img
            src={img} alt=""/>
          <span className="close-btn" onClick={()=>{removeCar(id)}}>
          <i className="fas fa-window-close"/>
          </span>
        </div>
        <div className="car-info">
          <h3>{marque}</h3>
          <h4>{model}</h4>
          <h5>More info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"/>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}

        </div>
      </article>
    );
  }
}

export default Car;
