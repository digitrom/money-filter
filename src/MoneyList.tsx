import {Button} from "./components/Button";
import {FC, useState} from "react";
import {MoneyType} from "./App";

type MoneyListType = {
    money: MoneyType[]
}



export const MoneyList: FC<MoneyListType> = ({money}) => {

    type MoneyFilterType = "All" | "Dollars" | "Rubles"

    const[filter, setFilter] = useState<MoneyFilterType>("All")

    let filteredMoney = money
    if(filter === "Dollars")
        filteredMoney = money.filter((f) => f.banknots === "Dollars")
    if(filter === "Rubles")
        filteredMoney= money.filter((f) => f.banknots === "RUBLS")


    const setFilterHandler = (filterValue: MoneyFilterType) => {
        setFilter(filterValue)
        // console.log(filter)
    }

    return (
        <>
            <ul>
                {filteredMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.number}</span>
                            <span>{m.value}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{margin: "35px"}}>
                <Button callBack={() => setFilterHandler("All")} title={"All"}/>
                <Button callBack={() => setFilterHandler("Dollars")} title={"Dollars"}/>
                <Button callBack={() => setFilterHandler("Rubles")} title={"Rubles"}/>
            </div>
        </>


    )
}