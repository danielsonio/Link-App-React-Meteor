import React from 'react';
import { Accounts } from 'meteor/accounts-base';


// export default class PrivateHeader extends React.Component {
//     onLogout() {
//         Accounts.logout();
//       }
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.header}</h1>
//                 <button onClick={this.onLogout.bind(this)}>LOGOUT</button>
//             </div>
//         )

//     }
// }

//Stateless functional component
const PrivateHeader = (props) => {
    return(
        <div>   
            <h1>{props.header}</h1>
            <button onClick={() => Accounts.logout()}>LOGOUT</button>
        </div>
    )
    
}

PrivateHeader.propTypes = {
    header: React.PropTypes.string.isRequired
};

export default PrivateHeader;