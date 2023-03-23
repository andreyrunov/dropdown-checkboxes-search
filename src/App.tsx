import React, { useState } from 'react';
import  styles  from './App.module.css'
import { MultiSelect } from './components/MultiSelect';
import { SelectOption } from './components/MultiSelect';

const options = [
  { label: "Русский", value: 1, icon: "rus" },
  { label: "Английский", value: 2, icon: "eng" },
  { label: "Испанский", value: 3, icon: "esp" },
  { label: "Немецкий", value: 4, icon: "ger" },
  { label: "Итальянский", value: 5, icon: "ital" },
  { label: "Польский", value: 6, icon: "pol" },
]

export default function App(): JSX.Element {
  const [valueMultiple, setValueMultiple] = useState<SelectOption[]>([])

  return (
    <div className={styles.wrapper}>
        <div className={styles.test}>
        <MultiSelect options={options} value={valueMultiple} onChange={option => setValueMultiple(option)} />
        </div>
    </div>
  );
}


