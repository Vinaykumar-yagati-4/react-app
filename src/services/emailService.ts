import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_5rfco2p",
    "template_a3cedki",
    order,
    "eh2Zwuv5399Mzl-MJ",
  );
};
