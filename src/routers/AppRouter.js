import { useSelector } from "react-redux";

import { AppScreen } from "../components/AppScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute"

import {
    BrowserRouter as Router,
    Switch
    
  } from "react-router-dom";


const AppRouter = () => {

    const {  user  } = useSelector( state=>state.auth );
    
    return (
        <Router>

            <div>
                <Switch>
                    <PublicRoute
                        path = "/auth"
                        component = { AuthRouter }
                        isAuth = { !!user }
                    />
                    
                    <PrivateRoute                        
                        path = "/"
                        component = { AppScreen }
                        isAuth = { !!user }

                    />
                </Switch>

            </div>

        </Router>
    );
};

export default AppRouter;