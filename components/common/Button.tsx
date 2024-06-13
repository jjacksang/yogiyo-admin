import { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    text: string;
    Size?: "sm" | "md" | "full";
}

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            className={`${buttonTheme.color.submit},${buttonTheme.theme.default}`}
            onClick={onClick}
        >
            {text}
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
