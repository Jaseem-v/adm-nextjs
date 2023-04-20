import ContactForm from "@/components/contactForm";

const ContactUs = () => {
  return (
    <>
      <div
        className="contactUs-header text-white py-16 md:py-20 lg:py-24 xl:py-28
            flex flex-col items-center justify-center
            px-4 xl:px-0"
      >
        <p className="font-kaisei text-lg md:text-xl lg:text-2xl">Contact us</p>
        <p
          className="font-bold text-4xl md:text-5xl lg:text-6xl
                mt-3 md:mt-4 lg:mt-5"
        >
          Get in touch
        </p>
        <p
          className="text-sm md:text-base max-w-lg text-center
                mt-3 md:mt-4 lg:mt-5"
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactUs;
