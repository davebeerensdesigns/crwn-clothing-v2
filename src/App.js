import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";

import {createUserDocumentFromAuth, getCurrentUser, onAuthStateChangedListener} from "./utils/firebase/firebase.utils";

import {setCurrentUser} from "./store/user/user.action";

import HomeComponent from "./routes/home/home.component";
import NavigationComponent from "./routes/navigation/navigation.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";
import ShopComponent from "./routes/shop/shop.component";
import CheckoutComponent from "./routes/checkout/checkout.component";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentUser().then((user) => console.log(user));
    }, []);

    return (
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
    )
}

export default App;
