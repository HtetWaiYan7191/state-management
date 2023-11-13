'use client'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { logOut } from "@/redux/features/authSlice";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
const Main = () => {
  // const currentUser = useSelector((state) => state.authReducer.value.username);
  const [currentUser, setCurrentUser] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString).username;
      setCurrentUser(parsedUserData);
    }
  }, []);


  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(logOut());
    router.push("/");
  };
  return (
    <>
      <div className="main-page flex flex-col items-center">
        <header className="flex gap-5 items-center mt-10">
          <h2 className="text-white uppercase font-bold text-2xl">
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
