import { ModalProps } from "@/lib/types";
import { useState } from "react";
import AddOptionMenu from "./addOptionMenu";

const OptionMenu = ({ onClose }: ModalProps) => {
    const [openModal, setOpenModal] = useState({
        addOptionMenu: false,
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
    return (
        <div className="flex flex-col mt-4 mx-8">
            <div className="flex items-center justify-between border rounded-2xl bg-white my-4 py-4">
                <input
                    placeholder="옵션을 검색하세요"
                    className=" border rounded-xl mx-4 px-4 py-2"
                />
                <div className="text-custom-gray text-sm">
                    <button>옵션 순서 변경</button>
                    <button
                        className="border rounded-xl px-4 py-2.5 bg-yogiyo-blue text-white font-bold mx-2"
                        onClick={() => handleModalOpen("addOptionMenu")}
                    >
                        옵션그룹 추가
                    </button>
                </div>
            </div>
            <div className="flex flex-col border rounded-2xl bg-white p-4 mt-2">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">옵션그룹명</span>
                    <div className="flex border rounded-xl py-2 px-4">
                        <select className="">
                            <option>판매중</option>
                            <option>품절</option>
                            <option>숨김</option>
                        </select>
                        <button>...</button>
                    </div>
                </div>
                <div className="flex items-between text-sm">
                    <span>유형</span>
                    <span className="">필수옵션 필수 1개 선택 옵션설정</span>
                </div>
                <div className="text-sm">
                    <span>연결메뉴</span>
                    <span>리코타치즈샐러드, 연어샐러드, 닭가슴살샐러드 메뉴연결</span>
                </div>
                <div>{/* 옵션 메뉴 들어갈 곳*/}</div>
            </div>
            {openModal.addOptionMenu && (
                <AddOptionMenu onClose={() => handleModalClose("addOptionMenu")} />
            )}
        </div>
    );
};

export default OptionMenu;
