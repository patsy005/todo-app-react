import { SortBtn } from "./SortBtn"

export function SortBtns({ onSortAll, onSortByActive, onSortByCompleted, activeBtn }) {
	return (
		<>
			<SortBtn onClick={onSortAll} activeBtn={activeBtn === 'all'}>
				All
			</SortBtn>
			<SortBtn onClick={onSortByActive} activeBtn={activeBtn === 'active'}>
				Active
			</SortBtn>
			<SortBtn onClick={onSortByCompleted} activeBtn={activeBtn === 'completed'}>
				Completed
			</SortBtn>
		</>
	)
}
