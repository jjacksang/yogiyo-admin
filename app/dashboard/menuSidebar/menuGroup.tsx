import React, { ReactNode, useState } from "react";
import MenuSet from "../menu/menuSet";
import MenuSoldout from "../menu/menuSoldout";
import { useRecoilState } from "recoil";
import { menuState } from "@/app/recoil/state";

type MenuGroupProps = {
    children?: ReactNode;
};

const MenuGroup = ({ children }: MenuGroupProps) => {
    const [showOption, setShowOption] = useState<boolean>(false);
    const [seletMenu, setSelectMenu] = useRecoilState(menuState);

    const OpenCloseBtn = (): void => {
        setShowOption(!showOption);
    };

    const handleMenuClick = (menuType: "menuSet" | "menuSoldout") => {
        setSelectMenu(menuType);
    };
    console.log(seletMenu);
    return (
        <div className="flex py-2 ml-2">
            <div className="ml-1">
                <p className="text-xs font-bold text-custom-gray">
                    메뉴관리<button onClick={OpenCloseBtn}>ㅇ</button>
                </p>

                {showOption ? (
                    <ul>
                        <li
                            className="text-base pt-2 pl-6"
                            onClick={() => handleMenuClick("menuSet")}
                        >
                            메뉴 관리
                        </li>
                        <li
                            className="text-base pt-2 pl-6"
                            onClick={() => handleMenuClick("menuSoldout")}
                        >
                            메뉴 품절
                        </li>
                    </ul>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default MenuGroup;
