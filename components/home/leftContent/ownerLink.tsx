export const OwnerLink = () => {
    return (
        <div className="flex flex-col gap-6 mt-6 md:flex-row md:gap-2">
            <div className="flex-1 py-6 px-4 border rounded-lg cursor-pointer">
                <span className="flex items-center text-xs text-font-black font-bold mb-4">
                    요기요 사장님 서비스 소개서
                    <img src="" className="w-4 h-4 fill-custom-gray" />
                </span>
                <div className="flex">
                    <div className="flex items-center cursor-pointer">
                        <img src="/images/yogiyologo.png" className="w-[92px] h-4" />
                    </div>
                </div>
            </div>
            <div className="flex-1 py-6 px-4 border rounded-lg cursor-pointer">
                <span className="flex items-center text-xs text-font-black font-bold mb-4">
                    PC 주문접수 프로그램
                </span>
                <div className="flex">
                    <div className="flex items-center cursor-pointer">
                        <img
                            src="/bannerimage/ic_order.0530286e.png"
                            className="w-[106px] h-4 align-bottom"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 py-6 px-4 border rounded-lg cursor-pointer">
                <span className="flex items-center text-xs text-font-black font-bold mb-4">
                    요기요 사장님 앱
                </span>
                <div className="flex">
                    <div className="flex items-center ">
                        <div className="cursor-pointer ">
                            <img
                                src="/bannerimage/ic_google.4d7952dc.png"
                                className="h-5 align-bottom"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="h-5 mx-3 border border-r-[1px]"></div>
                        <div className="cursor-pointer">
                            <img
                                src="/bannerimage/ic_apple.d2f80f49.png"
                                className="h-5 align-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
