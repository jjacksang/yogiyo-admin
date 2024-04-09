import { ImageUploadBtn } from "@/components/common/ImageUploadBtn";
import { ModalProps } from "@/lib/types";
import { useState } from "react";

interface addNewMenu {
    picture: File;
    menuData: {
        name: string;
        content: string;
        price: number;
    };
}

export const AddMenuItem = ({ onClose }: ModalProps) => {
    const [menuName, setMenuName] = useState("");
    const [menuManual, setMenuManual] = useState("");
    const [price, setPrice] = useState("");
    const [prevImage, setPrevImage] = useState(null);

    const formData = new FormData();
    formData.append("name", menuName);
    formData.append("content", menuManual);
    formData.append("price", price);

    const handleAddMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "menuName") {
            setMenuName(e.target.value);
        } else if (e.target.id === "menuManual") {
            setMenuManual(e.target.value);
        } else if (e.target.id === "price") {
            setPrice(e.target.value);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col w-3/5 h-auto bg-white border divide-y rounded-2xl p-6 pb-20 mb-16">
                <span className="">
                    <p className="flex justify-center text-xl font-bold">메뉴 추가</p>
                    <div className="flex justify-end gap-2 mb-4">
                        <button
                            className="border rounded-md px-2 py-1 bg-yogiyo-gray text-md font-bold"
                            onClick={onClose}
                        >
                            취소
                        </button>
                        <button className="border rounded-md px-2 py-1 bg-yogiyo-blue text-md font-bold text-white">
                            저장
                        </button>
                    </div>
                </span>
                <div className="flex py-4 px-2">
                    <span className="text-xl font-bold">메뉴명</span>
                    <input
                        value={menuName}
                        onChange={handleAddMenu}
                        id="menuName"
                        type="text"
                        className="border rounded-lg h-auto"
                    ></input>
                </div>
                <div className="flex py-4 px-2">
                    <span className="col-start-1 text-xl font-bold">메뉴설명(선택)</span>
                    <div className="py-4 px-2">
                        <input
                            value={menuManual}
                            onChange={handleAddMenu}
                            id="menuManual"
                            type="text"
                            className="border rounded-lg"
                        ></input>

                        <ul className=" text-custom-gray list-disc">
                            <span className="font-bold">
                                주문수 올리는 메뉴설명 팁 작성팁 더보기
                            </span>
                            <li className="">구성품목, 양 알려주기</li>
                            <li className="">들어가는 재료, 맛과 식감 알려주기</li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-4 px-2">
                    <span className="text-xl font-bold">가격</span>
                    <input
                        value={price}
                        onChange={handleAddMenu}
                        id="price"
                        type="text"
                        className="border rounded-lg"
                    ></input>
                </div>
                <div className="flex items-center py-4 px-2">
                    <span className="text-xl font-bold">노출상태</span>
                    <div className="border divide-x rounded-lg text-lg px-2 py-2">
                        <button className="text-md font-bold text-custom-gray  px-2">판매중</button>
                        <button className="text-md font-bold text-custom-gray  px-2">
                            하루품절
                        </button>
                        <button className="text-md font-bold text-custom-gray px-2">숨김</button>
                    </div>
                </div>
                <div className="flex py-4 px-2">
                    <span className="text-xl font-bold">메뉴사진(선택)</span>
                    <form>
                        {prevImage && (
                            <img
                                src={prevImage}
                                alt="preview"
                                style={{ width: "70px", height: "70px" }}
                            />
                        )}
                        <ImageUploadBtn />
                    </form>
                </div>
            </div>
            <div>{/* 미리보기 영역 */}</div>
        </div>
    );
};
