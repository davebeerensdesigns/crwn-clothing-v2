import {Routes, Route} from "react-router-dom";
import HomeComponent from "./routes/home/home.component";
import NavigationComponent from "./routes/navigation/navigation.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";

const App = () => {



    const ShopComponent = () => {
        return (
            <h1>I am the shop page</h1>
        )
    }

    return (
        <Routes>
            <Route path='/'
                   element={<NavigationComponent/>}>
                <Route index path='/'
                       element={
                           <HomeComponent/>
                       }/>
                <Route path='shop'
                       element={
                           <ShopComponent/>
                       }/>
                <Route path='auth'
                       element={
                           <AuthenticationComponent/>
                       }/>
            </Route>
        </Routes>
    )
}

export default App;
