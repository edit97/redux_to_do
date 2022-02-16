import {BrowserRouter} from "react-router-dom";
import Routes from "./routing";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>;
}

export default App;
