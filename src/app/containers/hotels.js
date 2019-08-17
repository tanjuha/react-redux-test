import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


import {requestGetHotels} from "../actions/hotel-action";

    class Hotels extends React.Component {
      
        render() {
           
            return (
                <ol>
                    dont work
                </ol>
            )
        };
    }

    const mapStateToProps = state => ({ users: state.user });
  export default Hotels;
  

//Hotels
/*
import React from 'react';

const Hotels = () => (
   <div className="container">
       <div className="row">
           <div className="col-3">
           <div className="card-deck">
                <div className="card mt-3">
                    <img className="card-img-top" src = "https://picsum.photos/id/237/200/200" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card  little bit longer
                            </p>
                        </div>
                    </div>
                </div>
           </div>
       </div>
   </div>
);

export default Hotels;

*/