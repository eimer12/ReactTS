
import { Outlet } from "react-router-dom"
import Data from "../components/Data"

export default function index() {
	return (
		<>
			<div>
				<h1>hellos</h1>
				<Data text="Soy un texto en una prop" />
				<Outlet />
			</div>
		</>
	)
}