const ServiceCategory = () => {
    return (
        <div className="flex flex-col gap-2 my-6 py-6 px-4 border rounded-lg md:flex-row md:gap-6">
            <div className="text-xs font-bold text-font-black">연관 서비스</div>
            <div className="flex flex-col grow gap-2">
                <div className="flex gap-4">
                    <a className="flex w-[60px] text-xs font-bold text-font-black">셀프서비스</a>
                    <div className="flex flex-wrap">
                        <a className="text-xs font-normal text-custom-gray shrink-0">기본설정</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray shrink-0">영업시간</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray shrink-0">메뉴관리</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray">배달요금/배달지역</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray shrink-0">쿠폰관리</a>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a className="flex w-[60px] text-xs font-bold text-font-black">광고관리</a>
                    <div className="flex flex-wrap">
                        <a className="text-xs font-normal text-custom-gray shrink-0">기본설정</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray shrink-0">영업시간</a>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a className="flex w-[60px] text-xs font-bold text-font-black">사장님포털</a>
                    <div className="flex flex-wrap">
                        <a className="text-xs font-normal text-custom-gray shrink-0">기본설정</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray shrink-0">영업시간</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray shrink-0">메뉴관리</a>
                        <div className="h-3.5 border-r my-1 mx-2"></div>
                        <a className="text-xs font-normal text-custom-gray">배달요금/배달지역</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;
