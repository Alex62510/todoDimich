import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";

export type FilterType = 'All' | "dollar" | "ruble"

function App() {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])


    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter((currentObj) => currentObj.banknote === "dollar")
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((currentObj) => currentObj.banknote === "ruble")
    }

    let onclickFilterHundler = (numeButton: FilterType) => {
        setFilter(numeButton)
    }

    return (
        <>
          <NewComponent
              currentMoney={currentMoney}
              onclickFilterHundler={onclickFilterHundler}/>
        </>

    );
}

export default App;
