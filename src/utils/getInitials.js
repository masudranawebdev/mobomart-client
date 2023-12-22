export const getInitials = (name) => {
  if (!name) {
    return "";
  }

  const nameArray = name.split(" ");
  const initials = nameArray
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2);

  return initials;
};
