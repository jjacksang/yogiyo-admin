import { ReactNode } from "react";
import { ModalLayout } from "./ModalLayout";
import { Button } from "./Button";

interface ReorderModalProps {
    // children: ReactNode;
    onClick?: () => void;
}

export const ReorderModal = ({ onClick }: ReorderModalProps) => {
    return (
        <ModalLayout>
            <div className="flex flex-col">
                <div className="flex items-center justify-center relative font-bold text-xl py-2 mb-4 border-b">
                    <span>순서 변경</span>
                    <button className="absolute right-4 pr-6" onClick={onClick}>
                        X
                    </button>
                </div>
                <div className="border bg-custom-gray rounded-xl px-4 py-4 mb-4">
                    <span>ㅇㅇ을 끌어서 원하는 순서로 바꿀 수 있습니다.</span>
                </div>
                <div>
                    <div>{/* 해당 아이템 리스트 */}</div>
                </div>
                <Button onClick={onClick}>저장</Button>
            </div>
        </ModalLayout>
    );
};
