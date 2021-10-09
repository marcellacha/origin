import React from 'react';
import axios from 'axios';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    btnSignUp = () => {
        let email = this.refs.email.value
        let password = this.refs.password.value
        let confPassword = this.refs.confPassword.value
        alert(`${email} ${password} ${confPassword}`)

        if (email == "" | password == "" || confPassword == "") {
            alert(`Fields cannot be empty`)
        } else {

            if (password == confPassword) {

                if (email.includes("@")) {
                    //mengirim ke API menggunakan axios.post
                    axios.post(`http://localhost:2010/users`, {
                        email,
                        password,
                        role: "user"
                    }).then((res) => {
                        console.log(res)

                    }).catch((err) => {
                        console.log(err)
                    })
                } else {
                    alert(`Email must contain the right format`)
                }

            } else {
                alert(`Password not match`)
            }
        }
    }
    render() {
        return (
            <div className="m-auto" style={{ width: "30%" }}>
                <h1 className="text-center">Sign Up</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="example@gmail.com" ref="email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="minimum 6 characters" ref="password"></input>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control" placeholder="minimum 6 characters" ref="confPassword"></input>
                </div>
                <button className="btn btn-warning" style={{ float: 'right' }} onClick={this.btnSignUp}>Sign Up</button>
            </div>
        );
    }
}

export default SignUpPage;