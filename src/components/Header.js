import "../styles/Header.css"

const Header = (props) => {

        return (
            <div id="header">
                <div className="innerHeader">
                    <div className="logoContainer">
                        <h1>{props.name}</h1>
                    </div>

                </div>
            </div>
        )
}

export default Header;