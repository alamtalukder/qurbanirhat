"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;
  const handleSignOut = async() =>{
        await authClient.signOut(); 
  }


  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="cow logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg text-green-500">QURBANI</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="btn btn-success text-white" >Home</Link>
          </li>
          <li>
            <Link href={"/animals"} className="btn btn-success text-white">All Animals</Link>
          </li>

          <li>
            <Link href={"/profile"} className="btn btn-success text-white">Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && <ul className="flex items-center gap-2 text-sm">

            <li>
              <Link href={"/signup"} className="btn btn-success text-white">Registration</Link>
            </li>

            <li>
              <Link href={"/signin"} className="btn btn-success text-white">Log In</Link>
            </li>
          </ul>}

          {
            user && <div className="flex gap-5">
              <Avatar size="sm">
                <Avatar.Image alt="John Doe" src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant ="danger">LogOut</Button>
            </div>
          }
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
