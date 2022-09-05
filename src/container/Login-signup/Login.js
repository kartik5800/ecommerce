import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ForgotPassword, GoogleLoginUser, LoginUser, SignupUser } from '../../Redux/Action/auth.action';



function Login(props) {
    const [userType, setUserType] = useState('Login')
    const [reset, setReset] = useState(false)

    const dispatch = useDispatch()

    const handletLogin = (values) => {
        // alert(JSON.stringify(values, null, 2));
        sessionStorage.setItem("user", "1234567")

    }

    const handleSignup = (values) => {

        const data = JSON.parse(localStorage.getItem("users"));

        console.log(data);

        if (data === null) {
            localStorage.setItem("users", JSON.stringify([values]));
        } else {
            data.push(values);
            localStorage.setItem("users", JSON.stringify(data));
        }

        data.push(values);
        console.log(data);
        localStorage.setItem("users", JSON.stringify(values));
        alert(JSON.stringify(values, null, 2));


    }

    const handleGoogleLogin = () => {
        dispatch(GoogleLoginUser())
    }

    const handlepassword = (values) => {
        // alert(JSON.stringify(values.email));
        dispatch(ForgotPassword(values))
    }

    let Login = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }

    let Signup = {
        name: yup.string().required('please enter name'),
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }
    let Password = {
        email: yup.string().required('enter email').email('enter valid email')
    }


    let schema, initVal;

    // console.log(reset);
    if (userType === "Login" && !reset) {
        schema = yup.object().shape(Login);
        initVal = {
            email: '',
            password: ''
        }
    } else if (userType === "Signup" && !reset) {
        schema = yup.object().shape(Signup);
        initVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset) {
        // console.log(reset);
        schema = yup.object().shape(Password);
        initVal = {
            email: ''
        }
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userType === "Login" && !reset) {
                // handletLogin(values)
                dispatch(LoginUser(values))
            } else if (userType === "Signup" && !reset) {
                // handleSignup(values)
                dispatch(SignupUser(values))
            } else {
                handlepassword(values)
                // dispatch(ForgotPassword(values))
            }
            resetForm();
        }
    })


    // console.log(formik.errors);

    return (
        <>

            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="">
                                {
                                    reset ?
                                        <h3 className='centerr'>Reset Password</h3> :
                                        userType === 'Login' ? <h3 className='centerr'>Login11</h3> : <h3 className='centerr'>Signup</h3>
                                }
                                <Formik value={formik}>
                                    <Form onSubmit={formik.handleSubmit}>
                                        <div className='text-center d-flex flex-direction-column p-5 m-5'>
                                            <div className='row align-items-center justify-content-center'>
                                                {
                                                    userType === 'Login' ? null
                                                        :
                                                        <div className="col-md-7 form-group">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                id="name"
                                                                placeholder="Your Name"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.name}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {
                                                                formik.errors.name && formik.touched.name ? <p className='validate'>{formik.errors.name}</p> : ''
                                                            }

                                                        </div>
                                                }
                                                <div className="col-md-7 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Enter Your Email"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {
                                                        formik.errors.email && formik.touched.email ? <p className='validate'>{formik.errors.email}</p> : ''
                                                    }

                                                   
                                                </div>
                                                {
                                                    reset === true ?
                                                        null :
                                                        <div className="col-md-7 form-group">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                name="password"
                                                                id="password"
                                                                placeholder="Your Password"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.password}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {
                                                                formik.errors.password && formik.touched.password ? <p className='validate'>{formik.errors.password}</p> : ''
                                                            }

                                                            
                                                        </div>

                                                }
                                                {
                                                    reset ?
                                                        <div className="text-center">
                                                            <button className="button-design" type="submit">Forgot password</button><br></br>
                                                        </div>
                                                        :
                                                        userType === 'Login' ?
                                                            <div className="text-center">
                                                                <button className="button-design" type="submit">Login</button><br></br>
                                                            </div> :
                                                            <div className="text-center">
                                                                <button className="button-design" type="submit">signup</button>
                                                            </div>
                                                }
                                                <p className='text-white mt-4'>OR</p>
                                                <div>
                                                    <button className="button-design" onClick={() => handleGoogleLogin()}><img width={25} height={25} src='assets/img/Google-Logo-PNG-Image.png' /> Google Login</button>

                                                </div>

                                                {
                                                    reset === true ?
                                                        <div className='text-center text-white '>
                                                            <span>already have an account ?</span>
                                                            <a onClick={() => setReset(false)}><span className='span-text'>Login</span></a>
                                                        </div> :
                                                        userType === 'Login' ?
                                                            <div className='text-center text-white mt-5'>
                                                                <span>create a New account ?</span>
                                                                <a onClick={() => { setUserType('Signup') }} ><span className='span-text'>signup</span></a> <br></br>
                                                                <a className='mt-3' onClick={() => { setReset(true) }}><span className='span-text'>Forget password</span></a>
                                                            </div> :
                                                            <div className='text-center text-white mt-5 cart-buttons'>
                                                                <span>already have an account ?</span>
                                                                <a onClick={() => { setUserType('Login') }} ><span className='span-text'>Login</span></a>
                                                            </div>
                                                }
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}





export default Login;