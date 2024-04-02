import { useEffect, useState } from "react";
import { MenuNav } from "./menuNavbar";
import AddMenu from "./menuModal/addMenuGroup";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { menuListState } from "@/app/recoil/state";
import { GroupList } from "@/app/services/shopAPI";

interface ViewOption {
    [key: number]: boolean;
}
const MenuSet = () => {
    const [openModal, setOpenModal] = useState(false);
    const [viewOption, setViewOption] = useState<ViewOption>({});
    const [menuGroup, setMenuGroup] = useRecoilState(menuListState)


    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const toggleViewOption = (id: number) => {
        setViewOption((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        const updateGroupList = async () => {
            try {
                const res = await GroupList()
                setMenuGroup(Array.isArray(res) ? res : [])
                console.log(res)
            } catch(error) {
                console.error('리스트 업데이트 실패', error)
            }
        }
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
                            onClick={handleModalOpen}
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
                            
                            <div className="flex justify-between w-full mb-4">
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
                                                    <li className="flex justify-start py-2">
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
                                <p className="text-yogiyo-blue">메뉴 추가</p>
                                <span>메뉴 순서 변경</span>
                            </div>
                            {/* 메뉴 리스트 영역 */}
                        </div>
                        
                    ))}
            </div>
            {openModal && <AddMenu onClose={handleModalClose} />}
        </div>
    );
};

export default MenuSet;
