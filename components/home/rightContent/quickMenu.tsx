export const QuickMenu = () => {
    return (
        <div className="mt-4">
            <div className="flex items-center gap-3.5 py-6 px-4 rounded-lg bg-[#fff9e5]">
                <div className="flex justify-center items-center px-[7px] py-[6px] gt-white rounded overflow-hidden">
                    <div className="w-[40px] h-[40px] bg-white rounded">
                        <img src="/images/test.svg" alt="test img" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-base font-bold ">주문을 이끄는 메뉴와 설명</span>

                        <span className="font-xs font-normal break-keep">
                            메뉴의 매력을 느낄 수 있도록 메뉴와 메뉴 설명을 작성해보세요!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
