"use client";
import { useRecoilValue } from "recoil";
import { menuItemAtom } from "../recoil/state";
import React from "react";
import { ModalProps } from "@/lib/types";

const MainMenuModal = ({ onClose }: ModalProps) => {
    const menuGroup = useRecoilValue(menuItemAtom);
    console.log(menuGroup);

    const handleModalOpen = () => {};
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col bg-white w-1/2 h-auto rounded-2xl my-20">
                <div className="flex py-4">
                    <p className="flex justify-center text-xl font-bold w-full">대표메뉴 설정</p>
                    <button className="px-4">X</button>
                </div>
                <div className="mx-4">
                    <div className="mx-4">
                        <input
                            className="border rounded-lg w-full px-4 py-2"
                            placeholder="메뉴명"
                        ></input>{" "}
                        {/* 메뉴 검색 */}
                        <ul className="text-sm text-custom-gray list-disc">
                            <li>대표메뉴를 선택(클릭)한 순서대로 저장됩니다.</li>
                            <li>
                                대표메뉴는 사진이 등록된 메뉴만 등록 가능합니다.(최대 6개까지, 주류
                                불가)
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* 대표메뉴 그룹 조건렌더 영역 */}
                        {menuGroup.map((menuItem) => (
                            <div
                                className="flex flex-col px-8 py-4 mt-8 border rounded-lg bg-white"
                                key={menuItem.id}
                            >
                                <div
                                    className="flex justify-between w-full mb-4"
                                    // onClick={(e) => {
                                    //     e.preventDefault();
                                    //     setSelectGroupId(menuItem.id);
                                    // }}
                                >
                                    <div className="gap-2">
                                        <p className="text-base font-bold text-font-black">
                                            {menuItem.name}
                                        </p>
                                    </div>
                                    <div className="flex flex-none items-center pl-2 border rounded-lg relative">
                                        <>
                                            <select>
                                                <option>판매중</option>
                                                <option>하루 품절</option>
                                                <option>숨김</option>
                                            </select>
                                        </>
                                    </div>
                                    {/* 판매, 품절 등 드롭다운 메뉴 */}
                                </div>
                                {/* {menuGroup.menus?.map((menuItem: MenusItem) => (
                <div className="flex justify-between w-full mb-4" key={menuItem.id}>
                    <div className="flex flex-col">
                        <span className="text-base font-bold">{menuItem.name}</span>
                        <p className="text-xs text-custom-gray pb-2">{menuItem.content}</p>
                        <p className="text-xs">{menuItem.price}</p>
                    </div>
                    
                </div>
            ))} */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenuModal;
