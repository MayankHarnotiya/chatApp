import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import MessagePage from "../components/MessagePage";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import Home from "../pages/Home";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import AuthLayouts from "../layout";
import ForgotPassword from "../pages/ForgotPassword";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"register",
                element:<AuthLayouts><RegisterPage/></AuthLayouts>
            },
            {
                path:'email',
                element:<AuthLayouts><CheckEmailPage/></AuthLayouts>
            },
            {
                path:"password",
                element:<AuthLayouts><CheckPasswordPage/></AuthLayouts>
            },
            {
                 path:"forgot-password",
                 element:<AuthLayouts><ForgotPassword/></AuthLayouts>
            },
            {
                path:"",
                element:<Home/>,
                children:[
                    {
                        path:":userId",
                        element:<MessagePage/>
                    }
                ]
            }
        ]
    }
])

export default router