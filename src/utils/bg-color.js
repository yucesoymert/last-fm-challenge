export const colors = [
  "bg-[#c44569]",
  "bg-[#58B19F]",
  "bg-[#9c88ff]",
  "bg-[#e66767]",
  "bg-[#82ccdd]",
  "bg-[#3c6382]",
  "bg-[#f7b731]",
  "bg-[#6a89cc]",
  "bg-[#e55039]",
  "bg-[#b71540]",
  "bg-[#20bf6b]",
  "bg-[#fc5c65]",
  "bg-[#0a3d62]",
  "bg-[#0fb9b1]",
  "bg-[#f8c291]",
  "bg-[#079992]",
  "bg-[#f19066]",
  "bg-[#574b90]",
];

export const getColor = (index = 0) => {
  return colors[index % colors.length];
};
