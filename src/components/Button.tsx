import {FC, ReactNode} from "react";

export type ButtonType = {
    callBack: ()=> void
    children: ReactNode | ReactNode[];
}

export const Button: FC<ButtonType> = ({callBack, children }) => {
    return (
        <>
            <button onClick={callBack}>
                {children}
            </button>
        </>
    )
}