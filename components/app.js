import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
    const [selectedHouse, setSelectHouse] = useState();
    
    return (
        <>
        <Banner headerText="Providing houses all over the world"/>
        {selectedHouse ? 
        (<House house={selectedHouse}/>) : 
        (<HouseList selectHouse = {setSelectHouse} />)
        }
        </>
    );
};

export default App;