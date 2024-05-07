"use client";

import { menuItemAtom, shopIdAtom } from "@/app/recoil/state";
import { getAxios } from "@/app/services/loginAPI";
import { MenuItem, ModalProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import MainMenuModal from "./MainMenuModal";

const MainMenu = ({ onClose }: ModalProps) => {
    const shopId = useRecoilValue(shopIdAtom);
    const [openModal, setOpenModal] = useState({
        MainMenuModal: false,
    });

    const handleModalOpen = (modalName: string) => {
        setOpenModal((prevModal) => ({
            ...prevModal,
            [modalName]: true,
        }));
    };
    const handleModalClose = (modalName: string) => {
        setOpenModal((prevModal) => ({
            ...prevModal,
            [modalName]: false,
        }));
    };
    useEffect(() => {
        const getSignatureMenu = async () => {
            try {
                const res = await getAxios.get(`/owner/signature-menu/shop/${shopId}`);
                if (res.status === 200) {
                    console.log(res);
                    console.log(res.data);
                }
            } catch (error) {
                console.error("대표 메뉴 조회 실패", error);
            }
        };
        getSignatureMenu();
    }, []);

    return (
        <div>
            <div className="border rounded-lg w-full h-auto">
                <div className="flex justify-between py-4 px-4">
                    <span className="font-bold text-lg">대표메뉴</span>
                    <div className="flex text-sm text-custom-gray">
                        <button className="px-2 py-2">순서 변경</button>
                        <button
                            className="border rounded-lg bg-yogiyo-blue px-2 py-2 text-white"
                            onClick={() => handleModalOpen("MainMenuModal")}
                        >
                            대표 메뉴 설정
                        </button>
                    </div>
                </div>
            </div>
            <div>{/* 대표 메뉴 영역 */}</div>
            {openModal.MainMenuModal && (
                <MainMenuModal onClose={() => handleModalClose("MainMenuModal")} />
            )}
        </div>
    );
};

export default MainMenu;
