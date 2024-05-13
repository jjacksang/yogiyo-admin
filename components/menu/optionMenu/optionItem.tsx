const ItemComponent = ({}) => {
    return (
        <div>
            <div className="flex justify-between w-full mb-4">
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

            {/* 옵션 그룹 밑에 있는 설명란 임시 저장 */}
        </div>
    );
};
