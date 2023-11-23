export function SortBtn({ children, onClick, activeBtn }) {
	return (
		<button onClick={onClick} className={`btn-sort ${activeBtn ? 'active' : ''}`}>
			{children}
		</button>
	)
}
