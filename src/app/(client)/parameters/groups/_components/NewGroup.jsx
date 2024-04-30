"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { addGroup } from "@/parameters/groups/_api/groupApi";
import { useRouter } from "next/navigation";
function NewGroup({ majors }) {
  const [isNewGroup, setIsNewGroup] = useState(false);
  const router = useRouter()
  const addNewGroup = (event) => {
    // event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));
    addGroup(object, router);
  };
  return (
    <div className="flex justify-center items-center">
      <button
        className="flex w-full  items-center justify-center p-0.5  overflow-hidden rounded-lg group 
                    bg-gradient-to-br from-green-primary to-blue-secondary group-hover:from-green-primary group-hover:to-blue-primary "
        onClick={() => setIsNewGroup(() => true)}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Ajouter classe
        </span>
      </button>
      <Modal isOpen={isNewGroup} onClose={() => setIsNewGroup(() => false)}>
        <h2 className="font-bold text-center text-cyan-600 my-4">
          Nouvelle Classe
        </h2>

        <form onSubmit={addNewGroup} className="w-72 p-4">
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                        rounded-md border-[1px] border-gray  text-center"
            type="text"
            name="group_name"
            placeholder="Nom de la classe"
            required
          />
          <input
            className=" bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                        rounded-md border-[1px] border-gray  text-center"
            type="number"
            name="group_size"
            placeholder="Effectif"
            required
          />
          <select name="major_id" id="" className="bg-my-white w-full bg-gray-100 mb-6 py-1.5 
                        rounded-md border-[1px] border-gray  text-center">
            {
              majors.map((major) => (
                <option key={major.major_id} value={major.major_id}>{major.major_name}</option>
              ))
            }
          </select>

          <input
            type="submit"
            className=" 
                      bg-gradient-to-br from-green-primary to-blue-secondary 
                      py-1.5 rounded-lg cursor-pointer flex w-full justify-center text-my-white
                      "
            value="Ajouter"
          />
        </form>
      </Modal>
    </div>
  );
}

export default NewGroup;
