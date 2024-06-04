"use client";
import { useRecoilValue } from "recoil";
import React, { useContext, useState } from "react";
import { ModalProps } from "@/lib/types";
import { getAxios } from "@/app/services/loginAPI";
import { menuItemAtom, shopIdAtom } from "@/app/recoil/state";

export default function MainMenuModal({ onClose }: ModalProps) {
    const menuGroup = useRecoilValue(menuItemAtom);
    const shopId = useRecoilValue(shopIdAtom);
    const [checkMenuList, setCheckMenuList] = useState<number[]>([]);

    const setMainMenu = async () => {
        try {
            const res = await getAxios.put("/owner/signature-menu/set", {
                shopId: shopId,
                menuIds: checkMenuList,
            });
            if (res.status === 204) {
                console.log(res);
                console.log(res.data);
            } else {
                console.error("대표메뉴조회실패");
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onCheckedList = (checked: boolean, ids: number) => {
        if (checked) {
            setCheckMenuList([...checkMenuList, ids]);
        } else if (!checked) {
            setCheckMenuList(checkMenuList.filter((el) => el !== ids));
        }
    };

    console.log(checkMenuList);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col bg-white w-1/2 h-3/4 rounded-2xl my-20 overflow-y-auto">
                <div className="flex py-4 mb-4 border-y">
                    <p className="flex justify-center text-xl font-bold w-full">대표메뉴 설정</p>
                    <button className="px-4" onClick={() => onClose}>
                        X
                    </button>
                </div>
                <div className="mx-4">
                    <div className="mx-4">
                        <input
                            className="border rounded-lg w-full px-4 py-2"
                            placeholder="메뉴명"
                        ></input>{" "}
                        {/* 메뉴 검색 */}
                        <ul className="text-sm text-custom-gray list-disc px-5">
                            <li>대표메뉴를 선택(클릭)한 순서대로 저장됩니다.</li>
                            <li>
                                대표메뉴는 사진이 등록된 메뉴만 등록 가능합니다.(최대 6개까지, 주류
                                불가)
                            </li>
                        </ul>
                    </div>
                    <form className="px-4">
                        <div>
                            {menuGroup?.map((menuItem) => (
                                <div
                                    className="flex flex-col px-8 py-4 mt-4 border rounded-lg "
                                    key={menuItem.id}
                                >
                                    <div className="flex justify-between w-full mb-2">
                                        <div className="gap-2">
                                            <p className="text-xl font-bold text-font-black">
                                                {menuItem.name}
                                            </p>
                                        </div>
                                        {/* 판매, 품절 등 드롭다운 메뉴 */}
                                    </div>
                                    {menuItem.menus?.map((item) => (
                                        <div
                                            className="flex justify-between w-full mb-4 px-2"
                                            key={item.id}
                                        >
                                            <div className="flex flex-col">
                                                <div className="flex">
                                                    <input
                                                        type="checkbox"
                                                        value={item.id}
                                                        className="text-base font-bold mr-2"
                                                        checked={
                                                            checkMenuList.includes(item.id)
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) => {
                                                            onCheckedList(
                                                                e.target.checked,
                                                                parseInt(e.target.value)
                                                            );
                                                        }}
                                                    />
                                                    <label>{item.name}</label>
                                                </div>
                                                <p className="text-xs text-custom-gray pl-[22px]">
                                                    {item.price}원
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
                <div className="flex justify-center p-4 border-t ">
                    <button
                        onClick={() => {
                            setMainMenu(), onClose();
                        }}
                        className="border rounded-xl w-full h-auto bg-yogiyo-blue text-white py-4 mx-4 text-xl font-bold"
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
}
