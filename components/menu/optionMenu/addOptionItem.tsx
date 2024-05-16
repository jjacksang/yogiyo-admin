import { getAxios } from "@/app/services/loginAPI";
import { ModalProps } from "@/lib/types";
import { useState } from "react";

export const AddOption = ({
    onClose,
    optionGroupId,
}: ModalProps & { optionGroupId: number | null }) => {
    const [content, setContent] = useState("");
    const [price, setPrice] = useState(0);

    const addOption = async () => {
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
    return (
        <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0">
            <div className="bg-white w-1/2 h-1/2 border rounded-2xl">
                <div className="flex items-center justify-center border-b py-4 text-xl font-bold relative">
                    <button className="absolute right-4" onClick={onClose}>
                        X
                    </button>
                    <span>옵션 추가</span>
                </div>
                <div className="flex flex-col mx-2 text-custom-gray text-sm divide-y">
                    <div className="flex flex-col py-4">
                        <span>옵션그룹명</span>
                        <input className="px-2 border rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <span>옵션가격</span>
                        <div>
                            <input className="border rounded-lg px-2"></input>
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
