export default function RemoveCharactersCNPJ_CPF(value) {
  const newStr = value
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
  return newStr;
}
