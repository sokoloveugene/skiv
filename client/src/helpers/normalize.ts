// eslint-disable-next-line
export type normalizeOptionType = "onlyLetters" | "phone";
export const normalize = (value: string, option: normalizeOptionType) => {
  switch (option) {
    case "onlyLetters":
      return value.replace(/[^a-zA-Z]/g, "");
    case "phone":
      return value.replace(/[^\d+]/g, "").substr(0, 13);
    default:
      return value;
  }
};
