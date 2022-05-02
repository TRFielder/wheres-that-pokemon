import "../styles/Header.css"

const Header = (props) => {

        return (
            <div id="header">
                <div className="innerHeader">
                    <div className="logoContainer">
                        <h1>{props.name}</h1>
                    </div>
                {props.showRestart
                ? <button id="restartBtn" onClick={() => props.restartGame()}>Restart</button>
                : <></>}
                </div>
            </div>
        )
}

export default Header;