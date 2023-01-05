"use client";

import { ChangeEvent, useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleClickClearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="container mx-auto max-w-screen-2xl ">
      <div className="px-4 sm:px-6">
        <h2 className="hidden font-headings text-brand font-bold text-6xl lg:landscape:block lg:landscape:px-6 mt-12">
          Contact
        </h2>
        <form
          action="mailto:contact@noworytaphotography.com"
          method="get"
          encType="text/plain"
        >
          <div>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChangeName}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>
          </div>
          <div>
            <label>Message:</label>
            <br />
            <textarea
              name="comments"
              rows={12}
              cols={35}
              value={message}
              onChange={handleChangeMessage}
            />
          </div>
          <div className="flex justify-between">
            <input
              type="submit"
              name="submit"
              value="Send"
              className="text-brand text-md font-bold px-2 py-4 border-brand border-2 rounded-l hover:bg-brand hover:text-white cursor-pointer transition-colors duration-550 transition ease-linear"
            />
            <input
              type="reset"
              name="reset"
              value="Clear Form"
              className="text-brand text-md font-bold px-2 py-4 border-brand border-2 rounded-l hover:bg-brand hover:text-white cursor-pointer transition-colors duration-550 transition ease-linear"
              onClick={handleClickClearForm}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
