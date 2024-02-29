"use client";
import { useRouter, useSearchParams } from "next/navigation";
import react, { useEffect } from "react";
import axios from "axios";
export default function loading() {
    const getKakaoToken = async () => {
        const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`;
        const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI}`;
        const code = new URL(window.location.href).searchParams.get("code");

        if (code) {
            try {
                const response = await axios({
                    method: "POST",
                    url: "https://kauth.kakao.com/oauth/token",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                    },
                    data: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                });
                console.log(response);

                if (response.status === 200) {
                    localStorage.setItem("kakao_token", response.data.access_token);
                } else {
                    console.log("token발급 실패");
                }
            } catch (error) {
                console.log(error.response.data);
            }
        }
    };

    useEffect(() => {
        getKakaoToken();
    }, []);
    return (
        <>
            <h2>로딩 페이지</h2>
        </>
    );
}
