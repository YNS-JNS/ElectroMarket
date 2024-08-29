import React from 'react'
import CustomButton from '../Ui/CustomButton'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <>
            <form>
                <div className="text-2xl text-blue-600 font-bold capitalize text-center mb-4">
                    <h3>welcome back!</h3>
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
                                type="text"
                                placeholder="enter username"
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
                        {/* <button className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
                            login
                        </button> */}
                        <CustomButton 
                         label="login"
                         onClick={() => console.log("login")}
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
            </form>
        </>
    )
}

export default LoginForm