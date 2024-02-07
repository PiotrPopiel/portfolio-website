"use client";

import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

function Contact() {
  const { ref } = useSectionInView("Contact", 0.8);

  const sendEmailHandler = async (formData: FormData) => {
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error.message);
      return;
    } else {
      toast.success("Successfuly sent email!");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="container flex flex-col p-5 md:p-10 items-center gap-10 mt-28 mb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
      viewport={{ once: true }}>
      <h2 className="text-3xl font-bold pt-5">Contact Me</h2>
      <p className="-mt-5">
        Please contact me directly at{" "}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={sendEmailHandler}
        className="flex flex-col w-[min(80%,34rem)] mb-5">
        <input
          type="email"
          name="sender"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-10 px-4 rounded-lg borderBlack dark:bg-gray-950"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={3000}
          className="h-52 p-4 my-3 rounded-lg borderBlack dark:bg-gray-950"></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;
