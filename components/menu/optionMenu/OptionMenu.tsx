import { ModalProps, ViewOption } from "@/lib/types";
import { useEffect, useState } from "react";
import AddOptionMenu from "./addOptionGroup";
import { getAxios } from "@/app/services/loginAPI";
import { useRecoilState, useRecoilValue } from "recoil";
import { optionGroupAtom, shopIdAtom } from "@/app/recoil/state";
import { ItemComponent } from "./optionItem";
import { AddOption } from "./addOptionItem";

const OptionMenu = ({ onClose }: ModalProps) => {
    const shopId = useRecoilValue(shopIdAtom);
    const [viewOption, setViewOption] = useState<ViewOption>({});
    const [optionList, setOptionList] = useRecoilState(optionGroupAtom);
    const [openModal, setOpenModal] = useState({
        addOptionGroup: false,
        addOptionItem: false,
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

    const handleViewOption = (id: number) => {
        setViewOption((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        console.log(id);
    };

    const addOption = async (optionGroupId: number) => {
        try {
            const res = await getAxios.post(
                `/owner/menu-option-group/${optionGroupId}/add-option`,
                {
                    content: "옵션추가테스트",
                    price: 1000,
                }
            );
            if (res.status === 201) console.log("옵션추가성공", res.data);
        } catch (error) {
            console.error("옵션추가실패", error);
        }
    };

    const deleteOptionGroup = async (optionId: number) => {
        try {
            const res = await getAxios.delete(`owner/menu-option-group/${optionId}/delete`);
            if (res.status === 204) {
                setOptionList((prevOptionList) =>
                    prevOptionList.filter((option) => option.id !== optionId)
                );
            }
        } catch (error) {
            console.error("삭제 실패", error);
        }
    };

    useEffect(() => {
        const optionGroupList = async () => {
            // 옵션 그룹 전체 조회
            try {
                const res = await getAxios.get(`/owner/menu-option-group/shop/${shopId}`);
                if (res.status === 200) {
                    console.log(res);
                    console.log(res.data);
                    setOptionList(res.data.menuOptionGroups);
                    console.log(optionList);
                }
            } catch (error) {
                console.error("옵션전체조회 실패", error);
            }
        };
        optionGroupList();
    }, [optionGroupAtom]);

    return (
        <div className="flex flex-col my-4 mx-8">
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
            {optionList && optionList.length > 0 ? (
                <>
                    {optionList.map((options) => (
                        <div
                            className="flex flex-col border rounded-2xl bg-white p-4 mt-2"
                            key={options.id}
                        >
                            <div className="flex justify-between items-center relative">
                                <span className="text-xl font-bold">{options.name}</span>
                                <div className="flex border rounded-xl py-1 px-2 gap-2">
                                    <div className="flex">
                                        <>
                                            <select>
                                                <option>판매중</option>
                                                <option>하루 품절</option>
                                                <option>숨김</option>
                                            </select>
                                        </>
                                        <button
                                            className="flex items-center"
                                            onClick={() => handleViewOption(options.id)}
                                        >
                                            <img src="/Icons/더보기버튼.svg" />
                                            {viewOption[options.id] && (
                                                <ul className="flex flex-col divide-y absolute top-5 right-0 w-[200px] border rounded-lg bg-white mt-4 px-2 py-1 z-10">
                                                    <li className="flex justify-start py-2">
                                                        옵션그룹명 변경
                                                    </li>
                                                    <li className="flex justify-start py-2">
                                                        연결메뉴 설정
                                                    </li>
                                                    <li className="flex justify-start py-2">
                                                        그룹 숨김
                                                    </li>
                                                    <li
                                                        className="flex justify-start py-2"
                                                        onClick={() =>
                                                            deleteOptionGroup(options.id)
                                                        }
                                                    >
                                                        삭제
                                                    </li>
                                                </ul>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-custom-gray py-4">
                                <div className="flex text-sm">
                                    <span>유형</span>
                                    <span className="">필수옵션 필수 1개 선택 옵션설정</span>
                                </div>
                                <div className="text-sm">
                                    <span>연결메뉴</span>
                                    <span>
                                        리코타치즈샐러드, 연어샐러드, 닭가슴살샐러드 메뉴연결
                                    </span>
                                </div>
                            </div>
                            <div className="flex border-t py-4">
                                <button
                                    className="text-xs px-2 text-yogiyo-blue"
                                    onClick={() => handleModalOpen("addOptionItem")}
                                >
                                    옵션추가
                                </button>

                                <span className="text-xs px-2">옵션 순서변경</span>
                            </div>
                            <ItemComponent optionGroupId={options.id} />
                        </div>
                    ))}
                </>
            ) : (
                <div>옵션그룹을 불러오는 중</div>
            )}

            {openModal.addOptionGroup && (
                <AddOptionMenu onClose={() => handleModalClose("addOptionMenu")} />
            )}
            {openModal.addOptionItem && (
                <AddOption onClose={() => handleModalClose("addOptionItem")} />
            )}
        </div>
    );
};

export default OptionMenu;
