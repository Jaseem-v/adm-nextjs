import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/contactForm";

const ContactUs = () => {
  const breadcrumbs = ['Contact']
  return (
    <>
      <SectionHeader title="Contact" breadcrumbs={breadcrumbs} />
      <ContactForm />
    </>
  );
};

export default ContactUs;
