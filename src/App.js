
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Nav/>
                <Content/>
                <div class="app-wrapper-content">
                    <Route path="/dialogs" render = { () => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path="/Profile" render = { () => <Profile state={props.state.profilePage}
                                                                     dispatch={props.dispatch}/> }/>

                </div>

            </div>
        </BrowserRouter>
    )


}
export default App;
