import deleteArrayElement from "./DeleteArrayElement";

const DeleteArrayList = (array, list) => {
  let newArray = [...array];
  for (let i = 0; i < list.length; i++) {
    newArray = deleteArrayElement(newArray, list[i]);
  }
  return newArray;
};

export default DeleteArrayList;
