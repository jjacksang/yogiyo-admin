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
            className={`${buttonTheme.color.submit},${buttonTheme.theme.default}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const buttonTheme = {
    color: {
        default: " bg-yogiyo-blue",
        submit: "bg-yogiyo-blue w-full",
    },
    theme: {
        default: "border rounded-xl px-6 py-2 text-white text-xl font-bold",
    },
};
