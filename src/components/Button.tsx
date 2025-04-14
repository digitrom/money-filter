import {FC} from "react";

export type ButtonType = {
    title: string
    callBack: ()=> void

}

export const Button: FC<ButtonType> = ({title,callBack}) => {
    return (
        <>
            <button onClick={callBack}>
                {title}
            </button>
        </>
    )
}