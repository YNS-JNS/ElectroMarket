// client\src\screens\LoginScreen\index.jsx:
import React from "react";
import LoginForm from "../../components/Authentication/LoginForm";

const LoginScreen = () => {
    return (
        <div className="h-screen flex items-center justify-center p-4">
            <div className="bg-white p-6 shadow-lg rounded-xl w-96 dark:bg-slate-100">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginScreen;
