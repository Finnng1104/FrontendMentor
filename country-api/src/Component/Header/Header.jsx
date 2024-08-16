import { StyleDarkMode, StyleHeader } from "./style";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

const Header = ({ isDarkMode, toggleMode }) => {
    return (
        <>
            <StyleHeader isDarkMode={isDarkMode} toggleMode={toggleMode} >
                    <h1>Where in the world?</h1>
                <StyleDarkMode isDarkMode={isDarkMode} onClick={toggleMode}>
                    <h3>
                    {isDarkMode ? (
                        <>
                         <SunOutlined style={{ marginRight: '10px' }} /> Light Mode
                        </>
                    ) : (
                        <>
                          <MoonOutlined style={{ marginRight: '10px' }} /> Dark Mode
                      
                        </>
                    )}
                    </h3>
                </StyleDarkMode>
            </StyleHeader>
        </>
    );
}

export default Header;