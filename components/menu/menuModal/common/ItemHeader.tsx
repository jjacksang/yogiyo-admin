import { ReactNode } from "react";

interface ItemHeaderProps {
    children: ReactNode;
}

export const ItemHeader = ({ children }: ItemHeaderProps) => {
    return (
        <header className="flex items-center justify-between border rounded-2xl bg-white my-4 py-4">
            {children}
        </header>
    );
};
