import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./CarList.scss";
import Car from '../Car/Car';
import {locadat} from '../locadat';

class CarList extends React.Component {

  state={
    cars:locadat
  };

  removeCar = id => {
    const{cars} = this.state;
    const sortedCars = cars.filter(car=> car.id !==id);
    this.setState({
      cars:sortedCars
    });


  };


  render () {
    const {cars} = this.state;
       return (
         <section className="carlist">
            {cars.map(car =>{
              return(
                <Car
                  key={car.id}
                  car={car}
                  removeCar={this.removeCar}
                />
              );
            })}
         </section>
       );

  }
}

export default CarList;
