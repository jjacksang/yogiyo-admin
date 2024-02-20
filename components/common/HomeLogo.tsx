import Link from "next/link";

export const HomeLogo = () => {
    return (
        <>
            <Link href="/" className="w-[150px]">
                <img src="/images/yogiyologo.png" alt="Yogiyo Logo" />
            </Link>
        </>
    );
};
