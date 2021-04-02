export type normalizeOptionType = "onlyLetters" | "phone" | "upperCase";

export const normalize = (
  value: string,
  option: normalizeOptionType
): string => {
  switch (option) {
    case "onlyLetters":
      return value.replace(/[^a-zа-яё ]/iu, "");
    case "phone":
      return value.replace(/[^\d+]/g, "").substr(0, 13);
    case "upperCase":
      return value.toLocaleUpperCase();
    default:
      return value;
  }
};
