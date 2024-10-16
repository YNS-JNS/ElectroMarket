// client\src\components\Authentication\LoginForm.jsx:
import React, { useEffect, useState } from 'react'
import CustomButton from '../Ui/CustomButton'
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../features/auth/authAction';
import Spinner from '../../helper/Spinner';
import { useLoginUserMutation } from '../../features/auth/authSlice';
// import { clearError } from '../../features/auth/authSlice';

const LoginForm = () => {

    const [email, setEmail] = useState('yns@gmail.com');
    const [password, setPassword] = useState('');
    const [ loginUser, { data: user, isLoading, isError, error, isSuccess }] = useLoginUserMutation();

    // console.log("user", user);

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { token, isLoading, error } = useSelector((state) => state.auth);

    // if token is present, redirect to dashboard
    // redirect authenticated user to profile screen or dashboard
    useEffect(() => {
        if (isSuccess && !isError) {
            console.log("user:", user);
            localStorage.setItem('userInfo', JSON.stringify(user));
            navigate('/dashboard', { replace: true });
            alert("You are logged in");
        }
        // return () => dispatch(clearError());
    }, [isSuccess, navigate, isError, user]);

    // submit handler
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        loginUser({ email, password });
    };

    // console.log("token", token);
    // console.log("isLoading", isLoading);
    // console.log("error", error);

    return (
        <>
            <form onSubmit={handleSubmitLogin}>
                <div className="text-2xl text-blue-600 font-bold capitalize text-center mb-4">
                    <h3>welcome back!</h3>
                </div>
                <div>
                    {/* email */}
                    <div>
                        <div className="capitalize text-xl mb-2">
                            <label>email</label>
                        </div>
                        <div className="border-2 relative">
                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                            </span>
                            <input
                                className="w-full placeholder:capitalize text-lg px-8 py-1.5 outline-blue-800"
                                type="email"
                                placeholder="yns@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* password */}
                    <div className="mt-4">
                        <div className="capitalize text-xl mb-2">
                            <label>password</label>
                        </div>
                        <div className="border-2 relative">
                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                    />
                                </svg>
                            </span>
                            <input
                                className="w-full placeholder:capitalize text-lg px-8 py-1.5 outline-blue-800"
                                type="password"
                                placeholder="enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* remember me */}
                    <div className="sm:flex sm:justify-between inline-block my-4">
                        <div className="flex items-center">
                            <input className="text-blue-800" type="checkbox" />
                            <span className="pl-1 text-sm">Remember me</span>
                        </div>
                        <div className="text-blue-800 text-sm hover:underline">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>

                    {/* login button */}
                    <div>
                      
                                <CustomButton
                                    onClick={handleSubmitLogin}
                                    label="login"
                                    variant='success'
                                    width="100%"
                                />
                      

                    </div>
                    {/* register link */}
                    <div className="text-[18px] text-center mt-4">
                        <p>
                            Don't have an account?{" "}
                            <Link
                                className="capitalize text-blue-800 hover:underline cursor-pointer"
                                to="/register"
                            >
                                register
                            </Link>
                        </p>
                    </div>
                </div>
                {/* {error && <p className="error text-red-500 text-sm">{error}</p>} */}
            </form>
        </>
    )
}

export default LoginForm