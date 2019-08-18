import React from "react";
import Hotels from '../../containers/hotels';
import './home.scss';

const Home = () => {
    return (
        <div>
            <div className="searchbox col-lg-6 col-md-6 col-sm-12 m-auto">
            <form className="form-inline">
                <input className="form-control flex-grow-1 mr-sm-2" type="search" 
                        placeholder="Шукати..." aria-label="Search" name="name" />
                <button className="btn button-dark my-2 my-sm-0" type="submit">Шукати</button>
            </form>
            </div>
            <Hotels/>
        </div>
    )
}

export default Home;