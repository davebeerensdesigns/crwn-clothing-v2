import {Routes, Route} from "react-router-dom";
import HomeComponent from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignInComponent from "./routes/sign-in/sign-in.component";

const App = () => {



    const ShopComponent = () => {
        return (
            <h1>I am the shop page</h1>
        )
    }

    return (
        <Routes>
            <Route path='/'
                   element={<Navigation/>}>
                <Route index path='/'
                       element={
                           <HomeComponent/>
                       }/>
                <Route path='shop'
                       element={
                           <ShopComponent/>
                       }/>
                <Route path='sign-in'
                       element={
                           <SignInComponent/>
                       }/>
            </Route>
        </Routes>
    )
}

export default App;
