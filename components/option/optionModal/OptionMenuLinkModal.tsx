import { menuItemAtom } from "@/app/recoil/state";
import { Button } from "@/components/common/Button";
import { Checkbox } from "@/components/common/Checkbox";
import { Header } from "@/components/common/Header";
import { ModalLayout } from "@/components/common/ModalLayout";
import { ModalProps } from "@/lib/types";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

export const OptionMenuLinkModal = ({ onClose }: ModalProps) => {
    const menuGroups = useRecoilValue(menuItemAtom);
    const [checkMenu, setCheckMenu] = useState<Array<number>>([]);

    const checkItemHandler = (id: number, isChecked: boolean) => {
        if (isChecked) {
            setCheckMenu((prev) => [...prev, id]);
        } else if (!isChecked) {
            setCheckMenu(checkMenu.filter((el) => el !== id));
        }
    };
    console.log(checkMenu);

    console.log(menuGroups);
    return (
        <ModalLayout>
            <div className="flex flex-col w-full">
                <div className="relative">
                    <Header onClick={onClose}>
                        <button className="absolute left-4" onClick={onClose}>
                            X
                        </button>
                        연결 메뉴 설정
                    </Header>
                </div>
                <div className="py-4 px-2 divide-y">
                    {menuGroups.map((menuGroups) => (
                        <div className="px-2 py-4" key={menuGroups.id}>
                            <div>
                                <Checkbox
                                    key={menuGroups.id}
                                    id={menuGroups.id}
                                    checkItemHandler={checkItemHandler}
                                    checked={checkMenu.includes(menuGroups.id) ? true : false}
                                />
                                <span className="px-2 font-medium">{menuGroups.name}</span>
                                <div className="px-6">
                                    {menuGroups.menus?.map((menus) => (
                                        <div className="flex flex-col text-sm text-custom-gray">
                                            <span>{menus.content}</span>
                                            <span>{menus.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button
                    text={"저장"}
                    color="submit"
                    size="wideButton"
                    className="sticky bottom-0"
                ></Button>
            </div>
        </ModalLayout>
    );
};
