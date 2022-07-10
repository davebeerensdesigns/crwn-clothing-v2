import {Routes, Route} from "react-router-dom";
import HomeComponent from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {



    const Shop = () => {
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
                           <Shop/>
                       }/>
            </Route>
        </Routes>
    )
}

export default App;
