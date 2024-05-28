import { ReactNode } from "react";
import { Options } from "../../optionMenu/option";

interface ItemProps {
    children: ReactNode;
    onClick?: () => void;
    option: Options;
}

export const ItemList = ({ children, option }: ItemProps) => {
    return (
        <div className="flex justify-between w-full mb-4" key={option.id}>
            <div className="flex flex-col pt-2 pl-2">
                <span className="text-base font-bold">{option.content}</span>
                <span className="text-xs text-custom-gray pb-2">{option.price}</span>
            </div>
            <div className="relative">
                <div className="flex items-center border rounded-lg  px-2 py-1">
                    <>
                        <select>
                            <option>판매중</option>
                            <option>하루 품절</option>
                            <option>숨김</option>
                        </select>
                    </>
                    {children}
                </div>
            </div>
        </div>
    );
};

const ItemTheme = {};
