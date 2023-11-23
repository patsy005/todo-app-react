export function BottomSection({ children }) {
	return (
		<section className="bottom">
			<div className="wrapper">
				<div className="box box__todos">{children}</div>
				{/* {children} */}
			</div>
		</section>
	)
}
