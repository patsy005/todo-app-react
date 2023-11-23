function TopSection({ children}) {
	return (
		<section className="top">
			<div className="wrapper">
				<div className="top__box">
					{children}
				</div>
			</div>
		</section>
	)
}

export default TopSection