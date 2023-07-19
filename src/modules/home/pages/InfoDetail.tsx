
import { useParams } from "react-router-dom";

export default function InfoDetail() {
	const { id } = useParams();

	return (
		<div>{ id }</div>
	)
}