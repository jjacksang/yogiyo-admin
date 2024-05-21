import { optionGroupAtom } from "@/app/recoil/state";
import { getAxios } from "@/app/services/loginAPI";
import { Header } from "@/components/common/Header";
import { ModalProps, Options } from "@/lib/types";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export const AddOptionItemModal = ({
    onClose,
    optionGroupId,
    optionId,
}: ModalProps & { optionGroupId?: number | null; optionId?: number | null | undefined }) => {
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");
    const optionList = useRecoilValue(optionGroupAtom);

    const filterOptionGroupId = optionList.find((option) => option.id === optionGroupId);

    console.log(optionGroupId);
    console.log(optionId);
    const filterOptions = filterOptionGroupId?.menuOptions?.find(
        (option) => option.id === optionId
    );
    console.log(filterOptions);

    const handleAddOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "content") {
            setContent(e.target.value);
        } else if (e.target.id === "price") {
            setPrice(e.target.value);
        }
    };

    const addOption = async () => {
        try {
            const res = await getAxios.post(
                `/owner/menu-option-group/${optionGroupId}/add-option`,
                {
                    content: content,
                    price: price,
                }
            );
            if (res.status === 201) console.log("옵션추가성공", res.data);
        } catch (error) {
            console.error("옵션추가실패", error);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 fixed inset-0">
            <div className="flex flex-col bg-white divide-y px-4 border rounded-2xl  w-1/2 h-fit m-20 overflow-hidden">
                <div className="relative">
                    <Header>
                        옵션추가
                        <button className="absolute right-4" onClick={onClose}>
                            X
                        </button>
                    </Header>
                </div>
                <div className="flex flex-col mx-2 text-custom-gray text-sm divide-y">
                    <div className="flex flex-col py-4">
                        <span>옵션그룹명</span>
                        <input
                            className="px-2 border rounded-lg"
                            onChange={handleAddOption}
                            value={filterOptions ? filterOptions?.content : content}
                            id="content"
                            type="text"
                        ></input>
                    </div>
                    <div className="flex flex-col">
                        <span>옵션가격</span>
                        <div>
                            <input
                                className="border rounded-lg px-2"
                                onChange={handleAddOption}
                                value={filterOptions ? filterOptions?.price : price}
                                id="price"
                                type="text"
                            ></input>
                            <span>일천만원</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="border rounded-xl bg-yogiyo-blue w-full h-10 text-xl font-bold text-white"
                        onClick={() => addOption()}
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};
