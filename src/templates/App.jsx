import { useState } from 'react';
import { Heading } from '../components/Heading';
import { Main } from '../components/Main';
import { MenuMobile } from '../components/MenuMobile';

function App() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <MenuMobile
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
            />
            <Heading setMenuVisible={setMenuVisible} />
            <Main />
        </>
    );
}

export default App;
