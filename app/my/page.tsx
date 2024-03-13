"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../recoil/state";
import { getAxios } from "../services/loginAPI";

export default function NickChange() {
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
        } catch (error) {
            console.error("닉네임 변경 중 오류가 발생", error);
        }
    };
    console.log(userNickname);
    return (
        <div>
            <p>닉네임 변경하기</p>
            {userNickname && <p>현재 닉네임: {userNickname.nickname}</p>}
            <div>
                <input
                    placeholder="변경할 닉네임 적어라"
                    value={newNickname}
                    type="text"
                    onChange={handleChange}
                ></input>
                <button onClick={submitNickname}>닉네임 변경</button>
            </div>
        </div>
    );
}
