
import classes from "./Nav.module.css"
import {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}> Profile</NavLink>
                </div>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/dialogs"> Messages</NavLink>
                </div>
                <div className={classes.item}>
                    News
                </div>
                <div className={classes.item}>
                    Music
                </div>
                <div className={classes.item}>
                    Settings
                </div>
            </nav>
        )
    }
}

export default Nav;
