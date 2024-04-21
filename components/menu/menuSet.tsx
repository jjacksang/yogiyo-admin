import { useEffect, useState } from "react";
import { MenuNav } from "./menuNavbar";
import AddMenu from "./menuModal/addMenuGroup";
import { useRecoilState } from "recoil";
import { menuListState } from "@/app/recoil/state";
import { GroupList } from "@/app/services/shopAPI";
import { getAxios } from "@/app/services/loginAPI";
import { AddMenuItem } from "./menuModal/addMenuItem";
import { ModalProps } from "@/lib/types";
import { MenuItemList } from "./menuItemList";

interface ViewOption {
    [key: number]: boolean;
}

interface Group {
    id: number;
    content: string;
    name: string;
}
const MenuSet = ({ onClose }: ModalProps) => {
    const [openModal, setOpenModal] = useState({
        addMenuGroup: false,
        addMenuItem: false,
    });
    const [viewOption, setViewOption] = useState<ViewOption>({});
    const [menuGroup, setMenuGroup] = useRecoilState(menuListState);
    const [selectGroupId, setSelectGroupId] = useState<number | null>(null);

    const menuGroupId = selectGroupId;

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
    };

    const deleteMenuGroup = async (ids: Group) => {
        if (menuGroupId != null) {
            try {
                const req = await getAxios.delete(`/owner/menu-group/${menuGroupId}`);
                if (req.status === 204) {
                    console.log("삭제 성공", req);
                    setMenuGroup((before) => before.filter((group) => group.id !== menuGroupId));
                }
            } catch (error) {
                console.log("삭제 실패", error);
            }
        }
    };

    useEffect(() => {
        const updateGroupList = async () => {
            try {
                const res = await GroupList();
                setMenuGroup(Array.isArray(res.menuGroups) ? res.menuGroups : []);
                console.log(res.menuGroups);
                const ids = res.menuGroups.map((group: Group) => group.id);

                return ids;
            } catch (error) {
                console.error("리스트 업데이트 실패", error);
            }
        };
        updateGroupList();
    }, [setMenuGroup]);
    return (
        <div>
            <MenuNav />
            <div className="flex flex-col px-8 py-4 ">
                <div className="flex justify-between px-4 py-2 border rounded-lg w-full bg-white">
                    <input
                        placeholder="메뉴를 검색하세요"
                        className="border rounded-lg pl-2 w-[300px]"
                    ></input>
                    {/* 메뉴 검색 영역 */}
                    <div className="flex gap-2">
                        <button className="text-xs text-custom-gray">메뉴그룹</button>
                        {/* 메뉴 그룹 드레그 영역 */}
                        <button
                            className="border rounded-lg bg-yogiyo-blue text-white px-3 py-2"
                            onClick={() => handleModalOpen("addMenuGroup")}
                        >
                            메뉴 그룹 추가
                        </button>
                        {/* 메뉴 그룹 추가 버튼 */}
                    </div>
                </div>
                {Array.isArray(menuGroup) &&
                    menuGroup.map((item) => (
                        <div
                            className="flex flex-col px-8 py-4 mt-8 border rounded-lg bg-white"
                            key={item.id}
                        >
                            <div
                                className="flex justify-between w-full mb-4"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectGroupId(item.id);
                                }}
                            >
                                <div className="gap-2">
                                    <p className="text-base font-bold text-font-black">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-custom-gray">{item.content}</p>
                                </div>
                                <div className="flex flex-none items-center pl-2 border rounded-lg relative">
                                    <>
                                        <select>
                                            <option>판매중</option>
                                            <option>하루 품절</option>
                                            <option>숨김</option>
                                        </select>
                                    </>
                                    <div>
                                        <button
                                            className="mx-2"
                                            onClick={() => toggleViewOption(item.id)}
                                        >
                                            보기
                                            {viewOption[item.id] && (
                                                <ul className="flex flex-col divide-y absolute right-0 w-[200px] border rounded-lg bg-white mt-4 px-2 py-1 z-10">
                                                    <li className="flex justify-start py-2">
                                                        메뉴 수정
                                                    </li>
                                                    <li
                                                        className="flex justify-start py-2"
                                                        onClick={() => deleteMenuGroup(item)}
                                                    >
                                                        메뉴 삭제
                                                    </li>
                                                </ul>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                {/* 판매, 품절 등 드롭다운 메뉴 */}
                            </div>
                            <div className="flex border-t py-4 text-sm gap-2.5">
                                <p
                                    className="text-yogiyo-blue"
                                    onClick={() => handleModalOpen("addMenuItem", item.id)}
                                >
                                    메뉴 추가
                                </p>
                                <span>메뉴 순서 변경</span>
                            </div>
                            <MenuItemList menuGroupId={item.id} />
                        </div>
                    ))}
            </div>
            {openModal.addMenuGroup && <AddMenu onClose={() => handleModalClose("addMenuGroup")} />}
            {openModal.addMenuItem && (
                <AddMenuItem
                    onClose={() => handleModalClose("addMenuItem")}
                    menuGroupId={selectGroupId}
                />
            )}
        </div>
    );
};

export default MenuSet;
