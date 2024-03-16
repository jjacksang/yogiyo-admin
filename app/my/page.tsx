"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../recoil/state";
import { getAxios } from "../services/loginAPI";
import { useRouter } from "next/navigation";

export default function NickChange() {
    const router = useRouter();
    const [userNickname, setUserNickname] = useRecoilState(userStateAtom);
    const [newNickname, setNewNickname] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewNickname(e.target.value);
    };

    const submitNickname = async () => {
        try {
            const res = await getAxios.patch("/owner/update", {
                nickname: newNickname,
            });
            console.log("저장성공");
            console.log(res);
            if (res.status === 204) {
                setUserNickname((prev) => {
                    if (prev) {
                        return { ...prev, nickname: newNickname };
                    }
                    return prev;
                });
            }
            router.push("/");
        } catch (error) {
            console.error("닉네임 변경 중 오류가 발생", error);
        }
    };
    console.log(userNickname);
    return (
        <div className="flex flex-col p-10 m-auto mt-12">
            <p className="flex justify-center mb-4 text-xl font-bold">닉네임 변경하기</p>
            <div className="flex flex-col items-center border rounded-lg gap-4">
                {userNickname && <p className="mt-5">현재 닉네임: {userNickname.nickname}</p>}
                <div className="flex px-6 py-4">
                    <input
                        placeholder="변경할 닉네임 적어라"
                        value={newNickname}
                        type="text"
                        onChange={handleChange}
                        className="border rounded pl-3 py-1.5"
                    ></input>
                    <button
                        onClick={submitNickname}
                        className="border rounded-lg px-2 ml-4 cursor-pointer"
                    >
                        닉네임 변경
                    </button>
                </div>
            </div>
        </div>
    );
}
