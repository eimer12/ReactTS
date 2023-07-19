
interface listUser {
	name: string
	id: number
}
interface Props {
	text?: string
	count?: number
	users?: listUser[]
}

export default function Data(data: Props) {
	return (
		<>
			{ data.text && <h3>{data.text}</h3> }
		</>
	)
}
