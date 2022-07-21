import {GlobalStyle} from "./global.styles";
import {useEffect, lazy, Suspense} from "react";
import {useDispatch} from "react-redux";

import {Routes, Route} from "react-router-dom";

import {checkUserSession} from "./store/user/user.action";

import SpinnerComponent from "./components/spinner/spinner.component";
const HomeComponent = lazy(() => import("./routes/home/home.component"));
const AuthenticationComponent = lazy(() => import("./routes/authentication/authentication.component"));
const NavigationComponent = lazy(() => import("./routes/navigation/navigation.component"));
const ShopComponent = lazy(() => import("./routes/shop/shop.component"));

const CheckoutComponent = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);

    return (
        <Suspense fallback={<SpinnerComponent />}>
            <GlobalStyle/>
            <Routes>
                <Route path='/'
                       element={<NavigationComponent/>}>
                    <Route index path='/'
                           element={
                               <HomeComponent/>
                           }/>
                    <Route path='shop/*'
                           element={
                               <ShopComponent/>
                           }/>
                    <Route path='auth'
                           element={
                               <AuthenticationComponent/>
                           }/>
                    <Route path='checkout'
                           element={
                               <CheckoutComponent/>
                           }/>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App;
