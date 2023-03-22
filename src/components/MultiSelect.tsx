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
	const [isOpen, setIsOpen] = useState(false)
	const [highlightedIndex, setHighlightedIndex] = useState(0)

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
		if (isOpen) setHighlightedIndex(0)
	}, [isOpen])

	return (
		<div onClick={() => setIsOpen(prev => !prev)} onBlur={() => setIsOpen(false)} tabIndex={0} className={styles.container}>
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
			<ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
				{options.map((option, index) => (
					<li key={option.value}
						onClick={e => {
							e.stopPropagation()
							selectOption(option)
						}}
						className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${index === highlightedIndex ? styles.highlighted : ""}`}
						onMouseEnter={() => setHighlightedIndex(index)}
					>
						<SvgSelector id={option.icon}/>
						<div className={styles["text-label"]}>
							{option.label}
						</div>
						<div className={`${styles["checkbox-inner"]} ${isOptionSelected(option) ? styles.active : ""}`}>
							<SvgSelector id="check-icon" />
						</div>

					</li>
				))}
			</ul>
		</div>
	)
}