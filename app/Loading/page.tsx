"use client";
import { useRouter } from "next/navigation";

export default function Loading() {
    const router = useRouter();

    router.push("/");
    return <div>Logind Loading...</div>;
}
