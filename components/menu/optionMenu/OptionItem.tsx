import { optionGroupAtom } from "@/app/recoil/state";
import { deleteOption } from "@/app/services/shopAPI";
import { OptionMenu, Options, ViewOption } from "@/lib/types";
import { useState } from "react";
import { useRecoilValue } from "recoil";

interface optionId {
    optionGroupId: number;
}

export const ItemComponent = ({ optionGroupId }: optionId) => {
    const optionList = useRecoilValue(optionGroupAtom);
    const optionItem = optionList.find((group) => group.id === optionGroupId);
    const [viewOption, setViewOption] = useState<ViewOption>({});

    const handleViewOption = (id: number) => {
        setViewOption((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        console.log(id);
    };

    return (
        <div>
            {optionItem?.menuOptions?.map((option: Options) => (
                <div className="flex justify-between w-full mb-4" key={option.id}>
                    <div className="flex flex-col pt-2 pl-2">
                        <span className="text-base font-bold">{option.content}</span>
                        <p className="text-xs text-custom-gray pb-2">{option.price}</p>
                    </div>
                    <div className="relative">
                        <div className="flex items-center border rounded-lg  px-2 py-1">
                            <>
                                <select>
                                    <option>판매중</option>
                                    <option>하루 품절</option>
                                    <option>숨김</option>
                                </select>
                            </>
                            <div className="flex">
                                <button
                                    className="px-0.5"
                                    onClick={() => handleViewOption(option.id)}
                                >
                                    <img src="/Icons/더보기버튼.svg" />
                                    {viewOption[option.id] && (
                                        <ul className="flex flex-col divide-y absolute top-9 right-0 w-[200px] border rounded-xl bg-white px-2 py-1 z-10">
                                            <li className="flex justify-start py-2">
                                                옵션명, 가격 수정
                                            </li>
                                            <li
                                                className="flex justify-start py-2"
                                                onClick={() => deleteOption(option.id)}
                                            >
                                                삭제
                                            </li>
                                        </ul>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* 옵션 그룹 밑에 있는 설명란 임시 저장 */}
        </div>
    );
};
