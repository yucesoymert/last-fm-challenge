export const gradients = [
  "bg-gradient-to-br from-[#f12711] to-[#f5af19]",
  "bg-gradient-to-tl from-[#355C7D] via-[#6C5B7B] to-[#C06C84]",
  "bg-gradient-to-b from-[#0cebeb] via-[#20e3b2] to-[#C06C84]",
  "bg-gradient-to-tl from-[#43C6AC] to-[#F8FFAE]",
  "bg-gradient-to-tr from-[#2C3E50] to-[#FD746C]",
  "bg-gradient-to-b from-[#FF5F6D] to-[#FFC371]",
  "bg-gradient-to-tl from-[#5614B0] to-[#DBD65C]",
  "bg-gradient-to-t from-[#4B1248] to-[#F0C27B]",
  "bg-gradient-to-br from-[#FC354C] to-[#0ABFBC]",
  "bg-gradient-to-l from-[#C04848] to-[#480048]",
  "bg-gradient-to-tr from-[#16A085] to-[#F4D03F]",
  "bg-gradient-to-r from-[#00467F] to-[#A5CC82]",
];

export const getGradient = (index = 0) => {
  return gradients[index % gradients.length];
};
