'use client'
import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { logOut } from "@/redux/features/authSlice";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
const Main = () => {
  const currentUser = useSelector((state) => state.authReducer.value.username);
  const dispatch = useDispatch();
  const router = useRouter();


  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(logOut());
    router.push("/");
  };
  return (
    <>
      <div className="main-page flex flex-col items-center">
        <header className="flex gap-5 items-center mt-10">
          <h2 className="text-white capitalize font-bold text-2xl">
            {currentUser}
          </h2>
          <Button title={"LogOut"} handleClick={handleOnClick} />
        </header>
        <Navigation/>
      </div>
      <Hero />
    </>
  );
};

export default Main;
