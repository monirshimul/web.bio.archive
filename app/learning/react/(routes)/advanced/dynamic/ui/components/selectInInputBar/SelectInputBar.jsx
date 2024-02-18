"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Headings from "../Headings";
import Pill from "./Pill";
const SelectInputBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const inputRef = useRef(null);

  useEffect(() => {
    let fetchUsers = async () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        let res = await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        );
        let data = await res.json();

        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };
  //   console.log(selectedUserSet);

  const handleRemoveUser = (user) => {
    const updatedUser = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUser);
    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      console.log("last user", lastUser);
      handleRemoveUser(lastUser);
      setSuggestions([]);
    }
  };

  return (
    <div className="container mx-auto">
      <Headings title={"Dynamic User Search"} />
      <p className="text-neutral-400 my-5 bg-gray-50 dark:bg-slate-700/40 dark:text-slate-300 rounded-lg p-5 text-lg font-inter">
        Search for an User and Select them multipally, and use Backspace
        <br /> button of keyboard to remove the last added user and update the
        state.
      </p>
      <div className="flex relative justify-start md:justify-center mx-auto w-11/12 lg:w-10/12 xl:w-7/12">
        <div className="w-[100%] mx-auto flex items-center flex-wrap gap-2 p-5 border rounded-lg border-dashed dark:border-slate-500">
          {selectedUsers.map((user, ind) => (
            <Pill
              key={ind}
              image={user.image}
              text={user.firstName}
              onClick={() => handleRemoveUser(user)}
            />
          ))}
          <div className="">
            <input
              ref={inputRef}
              className="h-[15px] p-5 focus:outline-none bg-transparent dark:text-slate-300"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              placeholder="Search for a User"
            />
            <ul className="max-h-[300px] overflow-y-scroll overflow-x-hidden absolute bg-gray-50 scrollbar-thin dark:bg-slate-700">
              {suggestions?.users?.map((user, index) =>
                !selectedUserSet.has(user.email) ? (
                  <li
                    key={index}
                    onClick={() => handleSelectUser(user)}
                    className=" flex gap-2 items-center my-2 border border-dashed dark:border-slate-500 rounded-lg p-2 w-fit cursor-pointer mx-2 hover:bg-slate-200 dark:bg-slate-800 transition-all dark:text-slate-300 font-bold"
                  >
                    <Image alt="user" src={user.image} width={20} height={20} />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                ) : (
                  <></>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInputBar;
