import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Index from "../../modules/home/pages/Index";
import Info from "../../modules/home/pages/Info";
import InfoDetail from "../../modules/home/pages/InfoDetail";


export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Index />}
		>
			<Route
				path="info"
				element={<Info />}
			>
				<Route
					path=":id"
					element={<InfoDetail />}
				/>
			</Route>
		</Route>
	)
)