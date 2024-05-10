import { ModalProps } from "@/lib/types";
import { useState } from "react";

const OptionMenu = ({ onClose }: ModalProps) => {
    const [openModal, setOpenModal] = useState({
        optionMenu: false,
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
        <div>
            <div>
                <input placeholder="옵션을 검색하세요" />
                <span>옵션 순서 변경</span>
                <button>옵션그룹 추가</button>
            </div>
            <div>
                <div>
                    <span>옵션그룹명</span>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <button></button>
                </div>
                <div>
                    <div>
                        <span>유형</span>
                        <span>필수옵션 필수 1개 선택 옵션설정</span>
                    </div>
                    <div>
                        <span>연결메뉴</span>
                        <span>리코타치즈샐러드, 연어샐러드, 닭가슴살샐러드 메뉴연결</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionMenu;
