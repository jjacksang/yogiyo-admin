import { menuItemAtom } from "@/app/recoil/state";
import { Button } from "@/components/common/Button";
import { ModalLayout } from "@/components/common/ModalLayout";
import { ModalProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";

interface ReoderItemProps extends ModalProps {
    menuGroupId: number | null;
}

export const ReorderItemModal = ({ onClose, menuGroupId }: ReoderItemProps) => {
    const menuGroup = useRecoilValue(menuItemAtom);
    const [enabled, setEnabled] = useState(false);
    const initialMenusIds = menuGroup.map((menu) => menu.id);
    const [menusIds, setMenusIds] = useState(initialMenusIds);

    const onDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) return null;

        const updatedMenuGroupIds = Array.from(menusIds);
        const [targetId] = updatedMenuGroupIds.splice(source.index, 1);
        updatedMenuGroupIds.splice(destination.index, 0, targetId);

        setMenusIds(updatedMenuGroupIds);
        console.log(menusIds);

        console.log([targetId]);
        console.log(">> source", source);
        console.log(">> Destination", destination);
    };

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    const sortItem = menuGroup.find((item) => item.id === menuGroupId);
    if (!sortItem) return null;

    console.log(sortItem);

    return (
        <ModalLayout>
            <div className="flex flex-col h-full">
                <div className="flex justify-center items-center font-bold text-xl relative border-b pb-4">
                    <span>메뉴 순서 변경</span>
                    <button className="absolute right-4 pr-6" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="flex-grow overflow-auto py-4 px-4">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {sortItem.menus?.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={`item${item.id}`}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    className="border rounded-xl px-4 py-2 mb-2"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {item.name}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <Button
                    onClick={() => {
                        console.log("hello");
                    }}
                    text={"저장"}
                    color="submit"
                    size="wideButton"
                    className="sticky bottom-0"
                />
            </div>
        </ModalLayout>
    );
};
