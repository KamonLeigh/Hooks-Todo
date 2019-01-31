function generateId(strLength) {
  strLength =
    typeof strLength === "number" && strLength > 0 ? strLength : false;

  let str = "";
  if (strLength) {
    const setOfCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < strLength; i++) {
      const randomNumber = Math.floor(Math.random() * setOfCharacters.length);

      str += setOfCharacters[randomNumber];
    }

    return str;
  } else {
    return false;
  }
}

export default generateId;
