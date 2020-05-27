import React, {Component, createContext} from "react"
import {auth} from "../../utils/firebase";

export const UserContext = createContext({ fbuser: null});

class UserProvider extends Component {

    state = {
        fbuser: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({fbuser: userAuth});
        });
    };
    render() {
        return(
            <UserContext.Provider value={this.state.fbuser}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
