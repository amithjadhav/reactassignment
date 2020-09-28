import React, {Component} from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {Link} from 'react-router-dom'

export class Payment extends Component {
    render(){
        return(
            <div className="paymentSucess">
                <DoneOutlineIcon className="sucess" />
                <h2>Payment Sucessfully</h2>
                <Link to="/">Back to Home page</Link>
            </div>
        )
    }
};

export default Payment