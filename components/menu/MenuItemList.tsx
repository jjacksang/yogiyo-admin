import { menuItemAtom } from "@/app/recoil/state";
import { deleteMenuItem } from "@/app/services/shopAPI";
import { MenusItem, ViewOption } from "@/lib/types";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { AddMenuItemModal } from "./menuModal/AddMenuItemModal";

interface MenuItemListProps {
    menuGroupId: number;
}

export const MenuItemList = ({ menuGroupId }: MenuItemListProps) => {
    const [viewOption, setViewOption] = useState<ViewOption>({});
    const menuItemGroups = useRecoilValue(menuItemAtom);
    const menuGroup = menuItemGroups.find((group) => group.id === menuGroupId);
    if (!menuGroup) return null;
    const [selectGroupId, setSelectGroupId] = useState<number | null>(null);
    const [openModal, setOpenModal] = useState({
        addMenuItemModal: false,
    });

    const handleModalOpen = (modalName: string, id?: number) => {
        setOpenModal((prevModal) => ({
            ...prevModal,
            [modalName]: true,
        }));
        if (id !== undefined) {
            setSelectGroupId(id);
            console.log(id);
        }
    };
    const handleModalClose = (modalName: string) => {
        setOpenModal((prevModal) => ({
            ...prevModal,
            [modalName]: false,
        }));
    };

    const toggleViewOption = (id: number) => {
        setViewOption((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        console.log(id);
    };

    // useEffect(() => {
    //     const getItemList = async () => {
    //         try {
    //             const res = await getAxios.get(`owner/menu-group/${menuGroupId}/menu`);
    //             const menus = res.data;
    //             // setMenuItems(menus);
    //             console.log(menus);
    //             console.log(res.data);
    //         } catch (error) {
    //             console.log("리스트 가져오기 실패", error);
    //         }
    //     };
    //     getItemList();
    // }, [menuGroup]);

    return (
        <div>
            {menuGroup.menus?.map((menuItem: MenusItem) => (
                <div className="flex justify-between w-full mb-4" key={menuItem.id}>
                    <div className="flex flex-col pt-2 pl-2">
                        <span className="text-base font-bold">{menuItem.name}</span>
                        <p className="text-xs text-custom-gray pb-2">{menuItem.content}</p>
                        <p className="text-xs text-custom-gray pb-2">{menuItem.price}</p>
                    </div>
                    <div className="">
                        <div className="flex items-center border rounded-lg px-2 py-1 relative">
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
                                    onClick={() => toggleViewOption(menuItem.id)}
                                >
                                    보기
                                    {viewOption[menuItem.id] ? (
                                        <ul className="flex flex-col divide-y absolute right-0 w-[200px] border rounded-lg bg-white mt-4 px-2 py-1 z-10">
                                            <li
                                                className="flex justify-start py-2"
                                                onClick={() => {
                                                    handleModalOpen("addMenuItemModal");
                                                    setSelectGroupId(menuItem.id);
                                                }}
                                            >
                                                메뉴 수정
                                            </li>
                                            <li
                                                className="flex justify-start py-2"
                                                onClick={() => deleteMenuItem(menuItem.id)}
                                            >
                                                메뉴 삭제
                                            </li>
                                        </ul>
                                    ) : (
                                        <div></div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {openModal.addMenuItemModal && (
                <AddMenuItemModal
                    menuGroupId={selectGroupId}
                    onClose={() => handleModalClose("addMenuItemModal")}
                />
            )}
        </div>
    );
};
