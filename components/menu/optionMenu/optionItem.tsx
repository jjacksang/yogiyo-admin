const ItemComponent = ({}) => {
    return (
        <div>
            <div className="flex justify-between w-full mb-4" key={}>
                <div className="flex flex-col">
                    <span className="text-base font-bold">{}</span>
                    <p className="text-xs text-custom-gray pb-2">{}</p>
                    <p className="text-xs">{}</p>
                </div>
                <div className="flex items-center border rounded-lg relative">
                    <>
                        <select>
                            <option>판매중</option>
                            <option>하루 품절</option>
                            <option>숨김</option>
                        </select>
                    </>

                    <div className="flex">
                        <button className="mx-2">
                            보기
                            {/* {viewOption ? ( */}
                            <ul className="flex flex-col divide-y absolute right-0 w-[200px] border rounded-lg bg-white mt-4 px-2 py-1 z-10">
                                <li className="flex justify-start py-2">판매중</li>
                                <li className="flex justify-start py-2">숨김</li>
                            </ul>
                            {/* ) : ( */}
                            <div></div>
                            {/* )} */}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex border-t py-2">
                <span className="text-xs px-2 text-yogiyo-blue">옵션추가</span>
                <span className="text-xs px-2">옵션 순서변경</span>
            </div>
            <div className="flex items-between text-sm">
                <span>유형</span>
                <span className="">필수옵션 필수 1개 선택 옵션설정</span>
            </div>
            <div className="text-sm">
                <span>연결메뉴</span>
                <span>리코타치즈샐러드, 연어샐러드, 닭가슴살샐러드 메뉴연결</span>
            </div>{" "}
            {/* 옵션 그룹 밑에 있는 설명란 임시 저장 */}
        </div>
    );
};
