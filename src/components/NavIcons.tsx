"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState<Boolean>();
  const [isCartOpen, setIsCartOpen] = useState<Boolean>();
  const router = useRouter();
  const isLogin = false;
  const handleProfile = () => {
    if (!isLogin) {
      router.push("/login");
    }
    setIsProfileOpen(true);
  };
  return (
    <div className="flex items-center gap-4 xl-gap-6 relative">
      <Image
        src={"/profile.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-md">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src={"/cart.png"}
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-ful text-white text-sm flex items-center justify-center">2</div>
      </div>
      {isCartOpen && (
        <div>
          <CartModal />
        </div>
      )}
    </div>
  );
}
