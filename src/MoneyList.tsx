import {Button} from "./components/Button";
import {FC} from "react";
import {MoneyType} from "./App";

type MoneyListType = {
    money: MoneyType[]
}

export const MoneyList: FC<MoneyListType> = ({money}) => {
    return (
        <>
            {money.map((m, index) => {
                return (
                    <ul>
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.number}</span>
                            <span>{m.value}</span>
                        </li>
                    </ul>
                )
            })}
            <Button title={"All"}/>
            <Button title={"Dollars"}/>
            <Button title={"Rubles"}/>

        </>
    )
}