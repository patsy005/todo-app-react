import { SortBtns } from "./SortBtns"

function SortBtnMobileSection({ onSortAll, onSortByActive, onSortByCompleted, activeBtn }) {
	return (
		<section className="btns-sort">
			<div className="wrapper">
				<div className="box box__btns-sort box__btns-sort--mobile">
					<SortBtns
						onSortAll={onSortAll}
						onSortByActive={onSortByActive}
						onSortByCompleted={onSortByCompleted}
						activeBtn={activeBtn}
					/>
				</div>
			</div>
		</section>
	)
}

export default SortBtnMobileSection
