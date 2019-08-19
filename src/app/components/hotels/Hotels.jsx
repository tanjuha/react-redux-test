import React from "react";
import PropTypes from 'prop-types';

export class Hotels extends React.Component {
    componentDidMount() {
        this.props.requestGetHotels();
    }

    showList(users) {
        return users.map((user) => {
            return (
                <li  key={user.id} 
                    className="post-card d-flex align-items-center 
                        col-lg-6 col-md-9 col-sm-12 mx-auto mb-5">
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
        return (
            <>
                <h2 className="title">
                    Готелі України
                </h2>
                <ul>
                    {this.showList(this.props.users)}
                </ul>
            </>
        )
    };
}

Hotels.propTypes = {
    users: PropTypes.array,
    requestGetHotels: PropTypes.func
  }