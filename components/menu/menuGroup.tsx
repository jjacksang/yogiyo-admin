import { useState } from "react";

const MenuGroup = () => {
    const [showOption, setShowOption] = useState<boolean>(false);

    const OpenCloseBtn = (): void => {
        setShowOption(!showOption);
    };

    return (
        <div className="flex py-2 ml-2">
            <div className="ml-1">
                <p className="text-xs font-bold text-custom-gray">메뉴관리</p>
                <button onClick={OpenCloseBtn}>ㅇ</button>
                {showOption ? (
                    <ul>
                        <li className="text-base pt-2 pl-6">메뉴 관리</li>
                        <li className="text-base pt-2 pl-6">메뉴 품절</li>
                    </ul>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default MenuGroup;
