import { ReactNode } from "react";

type Size = "sm" | "md" | "full";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    size?: Size;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button
            className={`${buttonTheme.color} border rounded-xl px-6 py-2 bg-yogiyo-blue text-white font-bold`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const buttonTheme = {
    color: {
        default: "bg-yogiyo-blue text-xl text-white font-bold",
    },
};
