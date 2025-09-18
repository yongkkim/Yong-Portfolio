"use client";

import clsx from "clsx";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Clipboard from "@/components/Clipboard/Clipboard";
import Loading from "@/components/Loading/Loading";
import { motion } from "framer-motion";
import Tooltip from "@/components/Tooltip/Tooltip";
import DOMPurify from "dompurify";

export default function ClientContact() {
  const [contactType, setContactType] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formDataError, setFormDataError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const MAX_NAME = 20;
  const MAX_EMAIL = 50;
  const MAX_MESSAGE = 1000;

  type FieldName = "name" | "email" | "message";

  useEffect(() => {
    if (isEmailSent && isSubmitted) {
      setTimeout(() => {
        setIsEmailSent(false);
        setIsSubmitted(false);
      }, 10000);
    }
  }, [isEmailSent, isSubmitted]);

  const clipboardRef = useRef<HTMLDivElement | null>(null);

  const contacts = {
    phone: "416-930-6863",
    email: "ykkim6@hotmail.com",
  };
  const getContactInfo = (type: string) => {
    setIsCopied(false);
    setContactType(type);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        clipboardRef.current &&
        !clipboardRef.current.contains(event.target as Node)
      ) {
        setToDefault();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const setToDefault = () => {
    setContactType("");
    setIsCopied(false);
  };

  const formatFieldName = (field: string) =>
    field.charAt(0).toUpperCase() + field.slice(1);

  const validateFormData = (field: string, value: string) => {
    const trimmedValue = value.trim();
    const fieldName = formatFieldName(field);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (field) {
      case "name":
        if (!trimmedValue) {
          return `${fieldName} is required.`;
        }
        break;
      case "email":
        if (!trimmedValue) {
          return `${fieldName} is required.`;
        } else if (!emailRegex.test(trimmedValue)) {
          return "Please enter a valid email.";
        }
        break;
      case "message":
        if (!trimmedValue) {
          return `${fieldName} is required.`;
        }
        break;
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    const fieldName = name as FieldName;
    let validatedValue = value;

    if (fieldName === "name" && validatedValue.length > MAX_NAME) {
      validatedValue = validatedValue.slice(0, MAX_NAME);
    }
    if (fieldName === "email" && validatedValue.length > MAX_EMAIL) {
      validatedValue = validatedValue.slice(0, MAX_EMAIL);
    }
    if (fieldName === "message" && validatedValue.length > MAX_MESSAGE) {
      validatedValue = validatedValue.slice(0, MAX_MESSAGE);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: validatedValue,
    }));

    if (formDataError[fieldName]) {
      setFormDataError((prev) => ({
        ...prev,
        [name]: validateFormData(name, formData[fieldName]),
      }));
    }
  };

  const handleBlur = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.currentTarget;
    const fieldName = name as FieldName;
    setFormDataError((prev) => ({
      ...prev,
      [name]: validateFormData(name, formData[fieldName]),
    }));
  };

  const handleFocus = () => {
    setIsEmailSent(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sanitize inputs first
    const sanitizedName = DOMPurify.sanitize(formData.name);
    const sanitizedEmail = DOMPurify.sanitize(formData.email);
    const sanitizedMessage = DOMPurify.sanitize(formData.message);

    // Run validation on sanitized values
    const nameError = validateFormData("name", sanitizedName);
    const emailError = validateFormData("email", sanitizedEmail);
    const messageError = validateFormData("message", sanitizedMessage);

    setFormDataError({
      name: nameError || "",
      email: emailError || "",
      message: messageError || "",
    });

    if (nameError || emailError || messageError) {
      setFormData({
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
      });

      return;
    }

    setIsSubmitted(true);

    if (isEmailSent) {
      setIsEmailSent(false);
    }

    // Prepare data
    const data = {
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
    };

    // Post request
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Failed to send email:", await res.text());
      setIsSubmitted(false);
      return;
    }

    setTimeout(() => setIsEmailSent(true), 1500);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <EmergingEffect delay={1}>
      <div
        className={clsx(
          "absolute top-[25%] bg-[rgba(255,255,255,0.15)] flex flex-col items-center w-1/2 h-[65%] py-[8px] px-[20px] text-center rounded-[10px]",
          "max-md:w-[90%] max-[1200px]:px-[10px] max-[1200px]:py-[4px]"
        )}
      >
        <div>
          <h1
            className={clsx(
              "text-white text-[30px] font-bold",
              "max-md:text-[25px]"
            )}
          >
            Contact Me
          </h1>
          <span className="block text-white text-[13px] p-[6px]">
            I’m always happy to connect — whether it’s about work, projects, or
            any questions you may have. You can reach me by phone, email, or
            LinkedIn, and feel free to download my resume!
          </span>
        </div>
        <div className="flex justify-center my-[10px]">
          <div className="relative group">
            <img
              onClick={() => getContactInfo("phone")}
              className="w-[25px] mr-[3px] cursor-pointer"
              src="/phone.svg"
            />
            {contactType === "phone" && (
              <Clipboard
                ref={clipboardRef}
                contactInfo={contacts[contactType]}
                isCopied={isCopied}
                setIsCopied={setIsCopied}
              />
            )}
            {contactType !== "phone" && <Tooltip label="Phone" />}
          </div>
          <a
            className="relative group"
            href="https://www.linkedin.com/in/yongkuk-kim/"
            target="_blank"
            onClick={setToDefault}
          >
            <img
              className="w-[26px] mr-[3px] rounded-[5px]"
              src="/linkedin.svg"
            />
            <Tooltip label="LinkedIn Profile" />
          </a>
          <div className="relative group">
            <img
              onClick={() => getContactInfo("email")}
              className="w-[25px] mr-[3px] cursor-pointer"
              src="/email.svg"
            />
            {contactType === "email" && (
              <Clipboard
                ref={clipboardRef}
                contactInfo={contacts[contactType]}
                isCopied={isCopied}
                setIsCopied={setIsCopied}
              />
            )}
            {contactType !== "email" && <Tooltip label="Email" />}
          </div>
          <a className="relative group" href="Yong_Resume.pdf" download>
            <img
              onClick={setToDefault}
              className="w-[25px] h-[25px] cursor-pointer"
              src="/download.png"
            />
            <Tooltip label="Download Resume" />
          </a>
        </div>
        <div className="flex flex-col w-full mt-[10px]">
          <h1 className="text-white text-[20px] mb-[10px] font-bold">
            Send Message
          </h1>
          <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            <div className="relative w-full">
              <input
                className="mb-[7px] p-[5px] rounded-[5px] w-full"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                onFocus={handleFocus}
                required
              />
              {formDataError.name && (
                <Tooltip label={formDataError.name} errMsg={true} />
              )}
            </div>
            <div className="relative w-full">
              <input
                className="mb-[7px] p-[5px] rounded-[5px] w-full"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                onFocus={handleFocus}
                required
              />
              {formDataError.email && (
                <Tooltip label={formDataError.email} errMsg={true} />
              )}
            </div>
            <div className="relative w-full">
              <textarea
                className="mb-[7px] p-[5px] rounded-[5px] h-[100px] w-full text-black"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                onFocus={handleFocus}
                required
              />
              {formDataError.message && (
                <Tooltip label={formDataError.message} errMsg={true} />
              )}
            </div>
            <motion.button
              initial={{ backgroundColor: "#149c73" }}
              whileHover={{
                backgroundColor: "rgb(38, 38, 38)",
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="w-1/3 text-white font-bold rounded-[10px]"
              type="submit"
            >
              <div className="flex items-center justify-center gap-1">
                <span>{isSubmitted && isEmailSent ? "Sent" : "Send"}</span>
                {isSubmitted && isEmailSent ? (
                  <span className="w-[20px] h-[20px]">
                    <motion.img
                      src="/checkMark.svg"
                      className="bg-white rounded-full p-[2px]"
                      initial={false}
                      animate={
                        isSubmitted && isEmailSent
                          ? { y: [0, -5, 0] }
                          : { y: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </span>
                ) : isSubmitted ? (
                  <Loading />
                ) : null}
              </div>
            </motion.button>
          </form>
        </div>
      </div>
    </EmergingEffect>
  );
}
