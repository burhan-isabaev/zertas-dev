import WhatsApp from "../icons/whatsapp";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/77754587948?text=Здравствуйте!%0AЯ%20пишу%20вам%20с%20сайта%20и%20хочу%20узнать%20подробнее%20о%20ваших%20услугах."
      className="hover:text-[#e1af87] transition"
      target="_blank"
    >
      <WhatsApp className="w-5 h-5" />
    </a>
  );
};

export default Whatsapp;
