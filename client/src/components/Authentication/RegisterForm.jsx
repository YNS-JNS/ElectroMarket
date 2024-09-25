// client\src\components\Authentication\RegisterForm.jsx:
import React, { useEffect, useState } from 'react'
import CustomButton from '../Ui/CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authAction';
import Spinner from '../../helper/Spinner';

const RegisterForm = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const { user, token, isFetching, isSuccess, isError, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProfileImage = (e) => {
        setProfileImage(e.target.files[0]);
    }

    // submit handler
    const handleSubmitRegister = (e) => {
        e.preventDefault();

        // validation:
        if (userName === '' || email === '' || password === '') {
            return alert("All fields are required");
        }

        const formData = new FormData();

        formData.append("username", userName);
        formData.append("email", email);
        formData.append("password", password);
        if (profileImage) {
            formData.append("image", profileImage);
        }

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        /* for (let pair of formData.entries()) {
           console.log(pair[0] + ': ' + pair[1]);
        } */


        dispatch(registerUser(formData));
        navigate('/login', { replace: true });

    };



    // redirect authenticated user to profile screen or dashboard
    // useEffect(() => {
    //     if (isSuccess) {
    //         navigate('/login', { replace: true });
    //     }
    // }, [isSuccess, navigate]);

    // if token is present, redirect to dashboard
    useEffect(() => {
        if (token) {
            navigate('/dashboard', { replace: true });
        }
    }, [token, navigate]);

    console.log("user", user);
    console.log("token", token);
    console.log("isFetching", isFetching);
    console.log("isSuccess", isSuccess);
    console.log("isError", isError);
    console.log("errorMessage", errorMessage);

    return (
        <>
            <form onSubmit={handleSubmitRegister}>
                <div className="text-2xl text-blue-600 font-bold capitalize text-center mb-4">
                    <h3>Create an account</h3>
                </div>
                <div>
                    {/* username */}
                    <div>
                        <div className="capitalize text-xl mb-2">
                            <label>username</label>
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
                                required
                                type="text"
                                placeholder="Youness"
                                name='username'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>

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
                                required
                                type="email"
                                placeholder="yns@example.com"
                                name='email'
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
                                required
                                type="password"
                                placeholder="enter password"
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Image Profile */}
                    <div className="my-4">
                        <div className="relative">
                            <label
                                title="Click to upload"
                                htmlFor="profilePhoto"
                                className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                            >
                                <div className="w-max relative">
                                    <img
                                        className="w-12"
                                        src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                                        alt="file upload icon"
                                        width="512"
                                        height="512"
                                    />
                                </div>
                                <div className="relative">
                                    <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                                        Upload an image profile (optional)
                                    </span>
                                    <span className="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
                                </div>
                            </label>
                            <input hidden type="file" name="image" id="profilePhoto" onChange={handleProfileImage} />
                        </div>
                    </div>

                    {/* Register button */}
                    <div>
                        {
                            isFetching ? (

                                <Spinner />
                            ) : (
                                <CustomButton
                                    onClick={handleSubmitRegister}
                                    label="Register"
                                    variant='success'
                                    width="100%"
                                />
                            )
                        }

                    </div>

                    {/* login link */}
                    <div className="text-[18px] text-center mt-4">
                        <p>
                            Do you already have an account?{" "}
                            <Link
                                className="capitalize text-blue-800 hover:underline cursor-pointer"
                                to="/login"
                            >
                                login
                            </Link>
                        </p>
                    </div>
                </div>
                {isError && <p className="text-red-500 text-sm">{errorMessage}</p>}
            </form>
        </>
    )
}

export default RegisterForm;