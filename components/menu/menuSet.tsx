import { useState } from "react";
import { MenuNav } from "./menuNavbar";
import AddMenu from "./addMenu";
import { useRecoilValue } from "recoil";
import { ownerAddMenu } from "@/app/recoil/state";

const MenuSet = () => {
    const [openModal, setOpenModal] = useState(false);
    const showMenuGroup = useRecoilValue(ownerAddMenu);

    console.log(ownerAddMenu);
    console.log(showMenuGroup);
    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };
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
                {showMenuGroup.map((item) => (
                    <div className="flex px-8 py-4 mt-8 border rounded-lg bg-white">
                        <div className="flex justify-between w-full">
                            <div className="gap-2">
                                <p className="text-base font-bold text-font-black">{item.name}</p>
                                <p className="text-xs text-custom-gray">{item.content}</p>
                            </div>
                            <div className="flex flex-none items-center pl-2 border rounded-lg">
                                <select>
                                    <option>판매중</option>
                                    <option>하루 품절</option>
                                    <option>숨김</option>
                                </select>
                                <select>
                                    <option>메뉴그룹 수정</option>
                                    <option>메뉴그룹 순서변경</option>
                                    <option>메뉴그룹 삭제</option>
                                </select>
                            </div>
                            {/* 판매, 품절 등 드롭다운 메뉴 */}
                        </div>
                    </div>
                ))}
            </div>
            {openModal && <AddMenu onClose={handleModalClose} />}
        </div>
    );
};

export default MenuSet;
