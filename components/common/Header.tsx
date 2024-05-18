import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
    onClick?: () => void;
}

export const Header = ({ onClick, children }: HeaderProps) => {
    return (
        <header
            className={`${HeaderTheme.font} flex justify-center items-center py-4 text-xl font-bold`}
        >
            {children}
        </header>
    );
};

const HeaderTheme = {
    utill: {
        default: "flex items-center py-4",
    },
    font: {
        default: "text-xl font-bold",
    },
};
