export const OwnerIcon = () => {
    return (
        <div className="flex flex-col border md:border md:rounded-lg">
            <div className="grid grid-cols-4 divide-x py-8 md:grid-cols-8 cursor-pointer">
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/영업시간.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />

                        <div className="text-xs font-bold text-font-black">영업시간</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/쿠폰관리.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">쿠폰관리</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/배달요금.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">배달요금</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/추천광고.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">추천광고</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/메뉴품절.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">메뉴품절</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/휴무일.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">휴무일</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/사장님장부.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">사장님장부</div>
                    </span>
                </div>
                <div className="relative">
                    <span className="flex flex-col items-center gap-2 py-2 md:py-0">
                        <img
                            src="/Icons/리뷰관리.png"
                            alt="test img"
                            className="flex flex-col items-center gap-2 w-10 h-10"
                        />
                        <div className="text-xs font-bold text-font-black">리뷰관리</div>
                    </span>
                </div>
            </div>
        </div>
    );
};
