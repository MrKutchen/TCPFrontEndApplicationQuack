import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        //BEM naming convention
        <div className="app">
            <h1>...let's build QUACK</h1>
            <Header/>
            <div className="app__body">
                <Sidebar />
                {/*Step 2. Build Side Bar*/}
                {/*Step 3. React-Router -> Chat Screen*/}
            </div>
        </div>
    );
}

export default App;
