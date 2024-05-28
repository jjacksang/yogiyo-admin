import { ReactNode } from "react";
import { ModalLayout } from "./ModalLayout";
import { Button } from "./Button";
import { ModalProps } from "@/lib/types";
import { ReorderMenu } from "@/app/services/shopAPI";
import { useRecoilValue } from "recoil";
import { menuItemAtom, shopIdAtom } from "@/app/recoil/state";

interface ReorderModalProps {
    // children: ReactNode;
    onClick?: () => void;
}

export const ReorderModal = ({ onClose }: ModalProps) => {
    const shopId = useRecoilValue(shopIdAtom);
    const menuGroup = useRecoilValue(menuItemAtom);
    const menuGroupIds = menuGroup.map((item) => item.id);

    console.log(menuGroupIds);
    return (
        <ModalLayout>
            <div className="flex flex-col">
                <div className="flex items-center justify-center relative font-bold text-xl py-2 mb-4 border-b">
                    <span>순서 변경</span>
                    <button className="absolute right-4 pr-6" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="border bg-custom-gray rounded-xl mx-4 px-4 py-4 mb-4">
                    <span className="text-base">ㅇㅇ을 끌어서 원하는 순서로 바꿀 수 있습니다.</span>
                </div>
                <div className="py-4 px-4">
                    {menuGroup.map((item) => (
                        <ul className="border rounded-xl px-2 py-2 mb-2">
                            <li className="text-base" key={item.id}>
                                {item.name}
                            </li>
                        </ul>
                    ))}
                </div>
                <Button
                    onClick={() => {
                        ReorderMenu(shopId, menuGroupIds);
                    }}
                >
                    저장
                </Button>
            </div>
        </ModalLayout>
    );
};
