export const OwnerSiteBanner = () => {
    return (
        <div
            className="mt-6 flex justify-end items-center relative min-h-[92px] border-none rounded-lg 
            bg-[#fff4d1]"
        >
            <span className="text-base font-bold absolute whitespace-pre-line left-4 m-auto text-font-black">
                "얼마를 벌어야 남을까요"
                <br />
                사장님포털에서 답해드립니다
            </span>
            <div className="flex self-end">
                <img
                    src="/bannerimage/이미지배너2.png"
                    className="w-[400px] h-[92px] align-bottom rounded-lg"
                />
            </div>
        </div>
    );
};
