import { MoonOutlined } from "@ant-design/icons";
import { StyleDarkMode, StyleHeader } from "./style";
const Header = () => {
    return (
        <>
            <StyleHeader>
                <div>
                    <h1>Where in the world?</h1>
                </div>
                <StyleDarkMode>
                    <h3>  <MoonOutlined style={{marginRight: "10px"}}/> Drak Mode</h3>
                </StyleDarkMode>
            </StyleHeader>
        </>
    )
}

export default Header;