import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {requestGetHotels} from '../actions/hotel-action';


class Hotels extends React.Component {
    componentDidMount() {
        this.props.requestGetHotels();
    }

    showList(users) {
        return users.map((user) => {
            return (
                <li  key={user.id} 
                    className="post-card d-flex align-items-center 
                        col-lg-9 col-md-9 col-sm-12 mx-auto mb-5">
                    <div>
                        <img src = "https://picsum.photos/id/237/400/400" alt={user.name}></img>
                    </div>
                    <div className="px-5 text-center">
                        <h3>
                            {user.name}
                        </h3>
                        <span className="d-inline-block mb-3 under-line">
                            {user.email}
                        </span>
                        <p>
                            Якщо ви збираєтесь використовувати Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз.
                        </p>
                        <button className="btn button-dark my-2 my-sm-0" type="submit">
                            Докладніше
                        </button>
                    </div>
                </li>
            );
        })
    }

    render() {
        const {data = []} = this.props.users;
        return (
            <>
                <h2 className="title">
                    Готелі України
                </h2>
                <ul>
                    {this.showList(data)}
                </ul>
            </>
        )
    };
}

const mapStateToProps = state => ({ users: state.user });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestGetHotels}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)

  

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