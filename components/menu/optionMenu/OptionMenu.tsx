import { ModalProps, ViewOption } from "@/lib/types";
import { useEffect, useState } from "react";
import AddOptionMenu from "./addOptionMenu";
import { getAxios } from "@/app/services/loginAPI";
import { useRecoilState, useRecoilValue } from "recoil";
import { optionGroupAtom, shopIdAtom } from "@/app/recoil/state";
import { deleteOptionGroup } from "@/app/services/shopAPI";

const OptionMenu = ({ onClose }: ModalProps) => {
    const shopId = useRecoilValue(shopIdAtom);
    const [viewOption, setViewOption] = useState<ViewOption>({});
    const [optionList, setOptionList] = useRecoilState(optionGroupAtom);
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

    const toggleViewOption = (id: number) => {
        setViewOption((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        console.log(id);
    };

    const handleDeleteOption = (optionId: number) => {
        deleteOptionGroup(optionId);
    };

    useEffect(() => {
        const optionGroupList = async () => {
            try {
                const res = await getAxios.get(`/owner/menu-option-group/shop/${shopId}`);
                if (res.status === 200) {
                    console.log(res);
                    console.log(res.data);
                    setOptionList(res.data.menuOptionGroups);
                }
            } catch (error) {
                console.error("옵션전체조회 실패", error);
            }
        };
        optionGroupList();
    }, []);
    console.log(optionList);
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
            {optionList.map((options) => (
                <div
                    className="flex flex-col border rounded-2xl bg-white p-4 mt-2"
                    key={options.id}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">{options.name}</span>
                        <div className="flex border rounded-xl py-2 px-4 gap-2">
                            <select className="">
                                <option>판매중</option>
                                <option>숨김</option>
                            </select>
                            <div>
                                <button className="" onClick={() => toggleViewOption(options.id)}>
                                    <img src="/Icons/더보기버튼.svg" />
                                    {viewOption[options.id] && (
                                        <ul className="flex flex-col divide-y absolute right-0 w-[200px] border rounded-lg bg-white mt-4 px-2 py-1 z-10">
                                            <li className="flex justify-start py-2">
                                                옵션그룹명 변경
                                            </li>
                                            <li className="flex justify-start py-2">
                                                연결메뉴 설정
                                            </li>
                                            <li className="flex justify-start py-2">그룹 숨김</li>
                                            <li
                                                className="flex justify-start py-2"
                                                onClick={() => deleteOptionGroup(options.id)}
                                            >
                                                삭제
                                            </li>
                                        </ul>
                                    )}
                                </button>
                            </div>
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
            ))}

            {openModal.addOptionMenu && (
                <AddOptionMenu onClose={() => handleModalClose("addOptionMenu")} />
            )}
        </div>
    );
};

export default OptionMenu;
