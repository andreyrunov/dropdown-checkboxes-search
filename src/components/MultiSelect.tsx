import React, { useEffect, useState } from 'react'
import styles from './MultiSelect.module.css'
import { SvgSelector } from './SvgSelector'

export type SelectOption = {
	label: string
	icon: string
	value: string | number
}

type MultipleSelectProps = {
	value: SelectOption[]
	onChange: (value: SelectOption[]) => void
}

type SelectProps = {
	options: SelectOption[]
} & MultipleSelectProps


export function MultiSelect({ value, options, onChange }: SelectProps) {
	const [searchValue, setSearchValue] = useState('')

	const searchText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}


	let dataSearch = options.filter((item: any) => {
		return item.label.toString().toLowerCase().includes(searchValue.toString().toLowerCase())
	})

	const [isOpen, setIsOpen] = useState(false)
	const [highlightedIndex, setHighlightedIndex] = useState<number>()

	function selectOption(option: SelectOption) {
		if (value.includes(option)) {
			onChange(value.filter(o => o !== option))
		} else {
			onChange([...value, option])
		}
	}

	function isOptionSelected(option: SelectOption) {
		return value.includes(option)
	}

	useEffect(() => {
		if (isOpen) setHighlightedIndex(-1)
	}, [isOpen])

	return (
		<div
			onClick={() => setIsOpen(prev => !prev)}
			tabIndex={0}
			className={styles.container}>
			<span className={styles.value}>{value.map(v => (
				<button
					key={v.value}
					onClick={e => {
						e.stopPropagation()
						selectOption(v)
					}}
					className={styles["option-badge"]}
				>
					{v.label}<span className={styles["remove-btn"]}>&times;</span>
				</button>
			))}</span>
			<div className={styles.arrow}>
				<SvgSelector id="arrow" />
			</div>
			<ul className={`${styles.options} ${isOpen ? styles.show : ""}`} >
				<div className={styles.search} onClick={e => e.stopPropagation()}>
					<input
						className={styles["search-input"]}
						type="text"
						placeholder='Поиск'
						value={searchValue}
						onClick={e => e.stopPropagation()}

						onChange={e => {
							e.stopPropagation()
							searchText(e)
						}}
					/>
				</div>
				{dataSearch.length > 0 ? dataSearch.map((option, index) => (
					<li key={option.value}
						onClick={e => {
							e.stopPropagation()
							selectOption(option)
						}}
						className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${index === highlightedIndex ? styles.highlighted : ""}`}
						onMouseEnter={() => setHighlightedIndex(index)}
						onBlur={() => setIsOpen(false)}
					>
						<SvgSelector id={option.icon} />
						<div className={styles["text-label"]}>
							{option.label}
						</div>
						<div className={`${styles["checkbox-inner"]} ${isOptionSelected(option) ? styles.active : ""}`}>
							<SvgSelector id="check-icon" />
						</div>
					</li>
				))
					:
					<li className={styles.option}>Ничего не найдено</li>
				}
			</ul>
		</div>
	)
}