import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "./firebase";
import Toastify from "./toastify";

//! ADD USER
export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

//! READ INFO
export const useFetch = () => {
  const [contactList, setContactList] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

//! DELETE USER
export const DeleteUser = (id) => {
  const db = getDatabase(firebase);

  remove(ref(db, "users/" + id));
  Toastify("Deleted Successfully");
};

//! UPDATE USER
export const UpdateUser = (info) => {
  const db = getDatabase(firebase);

  const updates = {};
  updates["users/" + info.id] = info;

  //   Toastify("Edited Successfully");

  return update(ref(db), updates);
};
