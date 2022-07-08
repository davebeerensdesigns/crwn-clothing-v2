import {Routes, Route} from "react-router-dom";
import HomeComponent from "./routes/home/home.component";

const App = () => {

    return (
        <Routes>
            <Route path='/'
                   element={
                       <HomeComponent/>
                   }/>
        </Routes>
    )
}

export default App;
