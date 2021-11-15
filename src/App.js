import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content";
import Profile from "./components/Profile/Profile";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {

    return (

            <div className="app-wrapper">

                <Header/>
                <Nav/>
                <Content/>
                <div class="app-wrapper-content">
                    <Route path="/dialogs" render = { () => <DialogsContainer /> }/>
                    <Route path="/Profile" render = { () => <Profile /> }/>

                </div>

            </div>
    )


}
export default App;
