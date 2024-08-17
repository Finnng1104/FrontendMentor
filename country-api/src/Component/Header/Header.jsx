import { StyleDarkMode, StyleHeader, StyleDiv } from "./style";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

const Header = ({ isDarkMode, toggleMode }) => {
    return (
        <>
            <StyleDiv >
                <StyleHeader isDarkMode={isDarkMode} toggleMode={toggleMode} >
                        <h1>Where in the world?</h1>
                    <StyleDarkMode isDarkMode={isDarkMode} onClick={toggleMode}>
                        <h3>
                        {isDarkMode ? (
                            <>
                            <SunOutlined/> <span>Light Mode</span>
                            </>
                        ) : (
                            <>
                            <MoonOutlined/> <span>Dark Mode</span>
                        
                            </>
                        )}
                        </h3>
                    </StyleDarkMode>
                </StyleHeader>
            </StyleDiv>
           
        </>
    );
}

export default Header;