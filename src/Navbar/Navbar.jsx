import style from "./Navbar.module.css";
import Button from "../button/button";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <div className={style.navbarWrapper}>
            <div className={style.container}>
                <h1 className={style.logoText}><span><img src={logo} alt="" /></span>NexaVault</h1>
                <div className={style.buttondiv}>
                    <Button className={style.hidden} intext="Log In" classes="outline" />
                    <Button intext="Sign Up" classes="dark" />
                </div>
            </div>
        </div>
    );
}
