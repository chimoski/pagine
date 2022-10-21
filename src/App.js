import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Error from "./components/Error";
import About from "./Pages/About";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Users from "./Pages/Users";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Home />}>
						<Route path='users' element={<Users />} />
						<Route path='about' element={<About />} />
					</Route>
					<Route path='/user' element={<User />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
