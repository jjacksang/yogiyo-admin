import { ReactNode } from "react";

interface ItemLayoutProps {
    children: ReactNode;
}

export const ItemLayout = ({ children }: ItemLayoutProps) => {
    return <div className="flex flex-col my-4 mx-8">{children}</div>;
};
