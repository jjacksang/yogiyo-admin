import { ModalLayout } from "@/components/common/ModalLayout";
import { ModalProps } from "@/lib/types";

interface IReorderMainMenu extends ModalProps {
    fetchedMainMenu: () => void;
}

export const ReorderMainMenuModal = ({ onClose }: IReorderMainMenu) => {
    return (
        <ModalLayout>
            <div>
                <div className="flex justify-center text-xl font-bold w-full relative pb-4">
                    <span>대표메뉴 순서 변경</span>
                    <button className="absolute right-4 pr-6" onClick={onClose}>
                        X
                    </button>
                </div>

                <div className="flex-grow overflow-auto py-4 px-4 scrollbar-hide"></div>
            </div>
        </ModalLayout>
    );
};
