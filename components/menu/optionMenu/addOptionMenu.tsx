import { ModalProps } from "@/lib/types";

const AddOptionMenu = ({ onClose }: ModalProps) => {
    return (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 fixed inset-0">
            <div className="flex flex-col bg-white divide-y px-4 border rounded-2xl  w-1/2 h-fit m-20 overflow-hidden">
                <div className="relative">
                    <div className="flex items-center justify-center py-4 ">
                        <button className="absolute left-4" onClick={onClose}>
                            X
                        </button>
                        <span className="text-xl font-bold">옵션그룹 추가</span>
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <span>옵션그룹명</span>
                    <input placeholder="면 사리" className="border rounded-xl mt-4 px-4 py-2" />
                </div>
                <div className="my-2 pb-10 py-4">
                    <span>옵션 내용</span>
                    <div className="flex flex-col my-2 gap-2">
                        <div className="flex">
                            <input
                                placeholder="옵션메뉴이름"
                                className="border rounded-xl flex items-center px-2 py-2 mr-2"
                            />
                            <input
                                placeholder="가격"
                                className="border rounded-xl flex items-center px-2 py-2"
                            />
                            <button className="ml-2">X</button>
                        </div>
                        <button className="flex items-start text-yogiyo-blue">옵션 추가</button>
                    </div>
                </div>
                <div className="flex justify-end py-4">
                    <button className="border rounded-xl bg-yogiyo-blue text-white text-xl font-bold w-1/4 px-4 py-2 mr-2">
                        다음
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddOptionMenu;
