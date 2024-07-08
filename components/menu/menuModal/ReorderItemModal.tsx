import { menuItemAtom } from "@/app/recoil/state";
import { ModalLayout } from "@/components/common/ModalLayout";
import { ModalProps } from "@/lib/types";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";

interface ReoderItemProps extends ModalProps {
    menuGroupId: number | null;
}

export const ReorderItemModal = ({ onClose, menuGroupId }: ReoderItemProps) => {
    const menuGroup = useRecoilValue(menuItemAtom);

    const sortItem = menuGroup.filter((item) => item.id === menuGroupId).map((item) => item.menus);
    console.log(sortItem);

    return (
        <ModalLayout>
            <div className="flex justify-center items-center font-bold text-xl relative border-b pb-4">
                <span>메뉴 순서 변경</span>
                <button className="absolute right-4 pr-6" onClick={onClose}>
                    X
                </button>
            </div>

            <div>
                {sortItem.map((item) => (
                    <div></div>
                ))}
            </div>
        </ModalLayout>
    );
};
