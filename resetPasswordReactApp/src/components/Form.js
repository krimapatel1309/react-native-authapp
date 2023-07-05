import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const baseURL = "https://authappserver.cyclic.app";
const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [invalidUser, setInvalidUser] = useState("");
    const [loading, setloading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [newPassword, setNewPassword] = useState({
        password: "",
        confirmPass: "",
    });

    const { token, id } = queryString.parse(location.search);

    const verifyToken = async () => {
        // console.log(location)
        try {
            setloading(true);
            // console.log(token, id);
            const config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                        "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    withCredentials: true,
                },
            };
            const { data } = await axios(
                `${baseURL}/verify-token?token=${token}&id=${id}`,
                config
            );
            //    console.log(data);

            //    if(!data.success) return setInvalidUser(data.success);
            setloading(false);
        } catch (error) {
            setloading(false);
            if (error?.response?.data) {
                const { data } = error.response;
                // console.log(error.response.data)
                if (!data.success) return setInvalidUser(data.message);
            }
            // console.log(error);
            setInvalidUser(error.message);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewPassword({ ...newPassword, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, confirmPass } = newPassword;
        if (password.trim().length < 8 || password.trim().length > 20)
            return setError("Password must be 8 to 20 char long!");
        if (password !== confirmPass)
            return setError("Password does not match!");

        try {
            setloading(true);
            // console.log(token, id);
            const { data } = await axios.post(
                `${baseURL}/reset-password?token=${token}&id=${id}`,
                { password }
            );

            setloading(false);

            if (data.success) {
                navigate("/reset-password", { replace: true });
                setSuccess(true);
            }
        } catch (error) {
            if (error?.response?.data) {
                setloading(false);
                const { data } = error.response;
                // console.log(error.response.data)
                if (!data.success) return setError(data.message);
            }
            // console.log(error);
        }
    };

    useEffect(() => {
        verifyToken();
    }, []);

    if (invalidUser) {
        return (
            <div className="max-w-screen-sm m-auto pt-40">
                <h1 className="text-center text-3xl text-gray-500 mb-3">
                    {invalidUser}
                </h1>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="max-w-screen-sm m-auto pt-40">
                <h1 className="text-center text-3xl text-gray-500 mb-3">
                    wait for moment verifying token...
                </h1>
            </div>
        );
    }

    if (success) {
        return (
            <div className="max-w-screen-sm m-auto pt-40">
                <h1 className="text-center text-3xl text-gray-500 mb-3">
                    Password reset Successfully
                </h1>
            </div>
        );
    }

    return (
        <div className="max-w-screen-sm m-auto pt-40">
            <h1 className="text-center text-3xl text-gray-500 mb-3">
                Reset Password
            </h1>
            <form action="" className="shadow w-full rounded-lg p-10">
                {error && (
                    <p className="text-center p-2 mb-3 bg-red-500 text-white">
                        {error}
                    </p>
                )}
                <div className="space-y-8">
                    <input
                        name="password"
                        value={newPassword.password}
                        type="password"
                        onChange={handleOnChange}
                        placeholder="Enter your new Password"
                        className="px-3 text-lg h-10 w-full border-gray-500 border-2 rounded"
                    />
                    <input
                        name="confirmPass"
                        value={newPassword.confirmPass}
                        type="password"
                        onChange={handleOnChange}
                        placeholder="Re-enter your new Password"
                        className="px-3 text-lg h-10 w-full border-gray-500 border-2 rounded"
                    />
                    <input
                        type="submit"
                        value="Reset Password"
                        className="bg-gray-500 w-full py-3 text-white rounded"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;
