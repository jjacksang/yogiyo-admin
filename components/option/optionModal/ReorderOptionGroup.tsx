import { optionGroupAtom } from "@/app/recoil/state";
import { Button } from "@/components/common/Button";
import { ModalLayout } from "@/components/common/ModalLayout";
import { ModalProps } from "@/lib/types";
import { useRecoilValue } from "recoil";

export const ReorderOptionGroup = ({ onClose }: ModalProps) => {
    const optionGroupList = useRecoilValue(optionGroupAtom);
    console.log(optionGroupList);

    const noneOptionGroup = () => {
        return (
            <div>
                <span>옵션 아이템이 없습니다.</span>
            </div>
        );
    };
    return (
        <ModalLayout>
            <div>
                <div className="flex justify-center border-b text-xl font-bold pb-4 relative">
                    <button className="absolute left-4" onClick={onClose}>
                        X
                    </button>
                    <span>옵션 순서 변경</span>
                </div>
                <div className="border rounded-xl text-sm text-custom-gray p-4 my-4 bg-[#f5f5dc]">
                    <span>옵션을 끌어서 원하는 순서로 바꿀 수 있습니다.</span>
                </div>
                <div className="flex flex-col gap-2">{noneOptionGroup()}</div>
                <div className="flex pt-4 justify-center">
                    <Button text={"저장"} />
                </div>
            </div>
        </ModalLayout>
    );
};
