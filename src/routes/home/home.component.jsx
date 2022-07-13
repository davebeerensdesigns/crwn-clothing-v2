import {Outlet} from "react-router-dom";

import DirectoryComponent from "../../components/directory/directory.component";

const HomeComponent = () => {

    return (
        <div>
            <DirectoryComponent/>
            <Outlet/>
        </div>
    )
};

export default HomeComponent;
