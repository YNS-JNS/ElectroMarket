// client\src\screens\RegisterScreen\index.jsx:
import React from "react";
import RegisterForm from "../../../components/Authentication/RegisterForm";

const RegisterScreen = () => {
    return (
        <div className="h-screen flex items-center justify-center p-4">
            <div className="bg-white p-6 shadow-lg rounded-xl w-[28rem] dark:bg-slate-100">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterScreen;
