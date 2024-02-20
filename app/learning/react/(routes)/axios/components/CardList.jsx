"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { RiChatDeleteLine } from "react-icons/ri";
const CardList = (props) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const issuerRef = useRef(null);
  const subTitleRef = useRef(null);
  const urlRef = useRef(null);
  const dateRef = useRef(null);

  const { title, description, issuer, subTitle, url, date, deleteCert } = props;
  const [updateValue, setUpdateValue] = useState({
    _title: title,
    _description: description,
    _issuer: issuer,
    _subTitle: subTitle,
    _url: url,
    _date: date,
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const selectFullData = (e) => {
    console.log("inputRef", inputRef);
    inputRef.current.setSelectionRange(1, 5);
  };

  const handleUpdateCert = (e) => {
    setUpdateValue({
      ...updateValue,
      [e.target.name]: e.target.value,
    });
  };
  //   console.log("updateValue", updateValue);
  const { _title, _description, _issuer, _subTitle, _url, _date } = updateValue;
  return (
    <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
      <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-2xl lg:text-4xl text-neutral-600 dark:text-slate-300 font-catamaran">
        {/* <TypingText title={""} /> */}
        {title}
      </h1>
      <div className="pl-5">
        <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
          Issuer: {issuer}
        </h3>
        <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
          {date}
        </span>
        <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
          {subTitle}
        </p>
        <p className="font-light antialiased text-sky-400 font-catamaran">
          <a className="" target="_blank" href={url}>
            View Certificate
          </a>
        </p>
        <div className="flex flex-row gap-3 justify-end items-center p-3 bg-slate-100 dark:bg-slate-700/40 rounded-2xl">
          <LuFileEdit
            onClick={onOpen}
            className="cursor-pointer text-orange-500"
            size={30}
          />
          <RiChatDeleteLine
            className="cursor-pointer text-rose-500"
            size={30}
          />
        </div>
      </div>

      {/* modal */}
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Data
              </ModalHeader>
              <ModalBody>
                <div className="dark:bg-slate-800">
                  <form
                    action=""
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
                  >
                    <input
                      onClick={(e) =>
                        titleRef.current.setSelectionRange(0, title.length)
                      }
                      onChange={(e) => handleUpdateCert(e)}
                      ref={titleRef}
                      type="text"
                      value={_title}
                      placeholder="Enter Title"
                      name="_title"
                      className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
                    />
                    <input
                      onChange={(e) => handleUpdateCert(e)}
                      onClick={(e) =>
                        issuerRef.current.setSelectionRange(0, issuer.length)
                      }
                      ref={issuerRef}
                      type="text"
                      value={_issuer}
                      placeholder="Enter issuer"
                      name="_issuer"
                      className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
                    />
                    <input
                      onChange={(e) => handleUpdateCert(e)}
                      onClick={(e) =>
                        dateRef.current.setSelectionRange(0, date.length)
                      }
                      ref={dateRef}
                      type="text"
                      value={_date}
                      placeholder="Enter date"
                      name="_date"
                      className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
                    />
                    <input
                      onChange={(e) => handleUpdateCert(e)}
                      onClick={(e) =>
                        subTitleRef.current.setSelectionRange(
                          0,
                          subTitle.length
                        )
                      }
                      ref={subTitleRef}
                      type="text"
                      value={_subTitle}
                      placeholder="Enter subTitle"
                      name="_subTitle"
                      className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
                    />
                    <input
                      onChange={(e) => handleUpdateCert(e)}
                      onClick={(e) =>
                        descriptionRef.current.setSelectionRange(
                          0,
                          description.length
                        )
                      }
                      ref={descriptionRef}
                      type="text"
                      value={_description}
                      placeholder="Enter description"
                      name="_description"
                      className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
                    />
                    <input
                      onChange={(e) => handleUpdateCert(e)}
                      onClick={(e) =>
                        urlRef.current.setSelectionRange(0, url.length)
                      }
                      ref={urlRef}
                      type="text"
                      value={_url}
                      placeholder="Enter url"
                      name="_url"
                      className="w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
                    />
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" variant="light" onPress={onClose}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CardList;
