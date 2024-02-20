import SwiperTips from "../../swipers/swiperTips";

export const OwnerTip = () => {
    return (
        <div className="mb-8 relative">
            <div className="flex justify-between items-center py-4">
                <span className="text-lg font-bold">사장님 맞춤 Tip</span>
            </div>
            <>
                <SwiperTips />
            </>
        </div>
    );
};
