import React, { useRef, useState } from "react";

export const ImageUploadBtn = () => {
    const imageRef = useRef<HTMLInputElement>(null);
    const [selectImage, setSelectImage] = useState<File | null>();

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            const file = e.target.files[0];
            setSelectImage(file);
            console.log("이미지 업로드", file);
        } else {
            setSelectImage(null);
        }
    };

    const handleClick = () => {
        if (imageRef.current) {
            imageRef.current.click();
        }
    };
    return (
        <form>
            <div>
                <img
                    src="/Icons/add.png"
                    width={80}
                    height={80}
                    onClick={handleClick}
                    className="cursor-pointer"
                />
                <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    width={70}
                    height={70}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                    className="border rounded-lg"
                ></input>
            </div>
        </form>
    );
};
