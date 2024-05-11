import { optionGroupAtom, shopIdAtom } from "@/app/recoil/state";
import { getAxios } from "@/app/services/loginAPI";
import { ModalProps } from "@/lib/types";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const AddOptionMenu = ({ onClose }: ModalProps) => {
    const [optionType, setOptionType] = useState<string>("REQUIRED");
    const [optionGroup, setOptionGroup] = useRecoilState(optionGroupAtom);
    const [optionGroupName, setOptionGroupName] = useState("");
    const [optionName, setOptionName] = useState("");
    const [showNextOption, setShowNextOption] = useState(false);
    const [price, setPrice] = useState("");
    const shopId = useRecoilValue(shopIdAtom);

    const handleNextOption = () => {
        if (optionGroupName && optionName && price !== null) {
            setShowNextOption(true);
        } else {
            setShowNextOption(false);
        }
    };

    const handleOptionGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptionGroupName(e.target.value);
    };

    const handleOptionContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "optionName") {
            setOptionName(e.target.value);
        } else if (e.target.id === "price") {
            setPrice(e.target.value);
        }
    };

    const addOptionGroup = async () => {
        try {
            const res = await getAxios.post(`/owner/menu-option-group/shop/${shopId}/add`, {
                name: "옵션테스트1",
                optionType: "REQUIRED",
                count: 1,
                options: [
                    {
                        content: "옵션테스트",
                        price: 10000,
                    },
                ],
                ifPossibleCount: false,
            });
            if (res.status === 201) {
                console.log("요청 성공", res.data);
            }
        } catch (error) {
            console.error("옵션그룹추가실패", error);
        }
    };

    const NextOption = () => {
        return (
            <div className="flex flex-col divide-y">
                <div className="flex py-4 gap-2">
                    <div className="flex flex-col items-center border rounded-lg w-full py-4">
                        <div
                            className="font-bold text-xl"
                            onClick={() => setOptionType("REQUIRED")}
                        >
                            필수 옵션
                        </div>
                        <span className="text-sm text-custom-gray">
                            반드시 선택해야 주문이 가능합니다.
                        </span>
                    </div>
                    <div className="flex flex-col items-center border rounded-lg w-full py-4">
                        <div
                            className="font-bold text-xl"
                            onClick={() => setOptionType("optional")}
                        >
                            선택 옵션
                        </div>
                        <span className="text-sm text-custom-gray">
                            선택하지 않아도 주문이 가능합니다.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold my-4">옵션 수</span>
                        <div className="border divide-y py-4 px-2">
                            <div className="text-ml text-custom-gray pb-4">
                                <span>고객은 필수 몇 개의 옵션을 선택할 수 있나요?</span>
                                {/* 갯수 버튼 */}
                            </div>
                            <div className="text-ml text-custom-gray pt-4">
                                <span>이 옵션그룹에는 옵션이 총 n개있습니다.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between text-xl px-2 my-2">
                        <button
                            className="text-custom-gray"
                            onClick={() => setShowNextOption(false)}
                        >
                            뒤로
                        </button>
                        <button
                            className="border rounded-xl px-6 py-2 bg-yogiyo-blue text-white font-bold"
                            onClick={addOptionGroup}
                        >
                            저장
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 fixed inset-0">
            <div className="flex flex-col bg-white divide-y px-4 border rounded-2xl  w-1/2 h-fit m-20 overflow-hidden">
                <div className="relative">
                    <div className="flex items-center justify-center py-4">
                        <button className="absolute left-4" onClick={onClose}>
                            X
                        </button>
                        <span className="text-xl font-bold">옵션그룹 추가</span>
                    </div>
                </div>
                {showNextOption === true ? (
                    NextOption()
                ) : (
                    <>
                        <div className="flex flex-col py-4 text-custom-gray">
                            <span>옵션그룹명</span>
                            <input
                                placeholder="ex) 면 사리"
                                value={optionGroupName}
                                onChange={handleOptionGroupName}
                                type="text"
                                id="groupName"
                                className="border rounded-xl mt-4 px-4 py-2"
                            />
                        </div>
                        <div className="my-2 pb-10 py-4 text-custom-gray">
                            <span>옵션 내용</span>
                            <div className="flex flex-col my-2 gap-2">
                                <div className="flex">
                                    <input
                                        placeholder="옵션메뉴이름"
                                        value={optionName}
                                        onChange={handleOptionContent}
                                        type="text"
                                        id="optionName"
                                        className="border rounded-xl flex items-center px-2 py-2 mr-2"
                                    />
                                    <input
                                        placeholder="가격"
                                        value={price}
                                        onChange={handleOptionContent}
                                        type="text"
                                        id="price"
                                        className="border rounded-xl flex items-center px-2 py-2"
                                    />
                                    <button className="ml-2">X</button>
                                </div>
                                <button className="flex items-start text-yogiyo-blue">
                                    옵션 추가
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end py-4">
                            <button
                                className="border rounded-xl bg-yogiyo-blue text-white text-xl font-bold w-1/4 px-4 py-2 mr-2"
                                onClick={handleNextOption}
                            >
                                다음
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddOptionMenu;
