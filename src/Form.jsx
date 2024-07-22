import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    terms: false,
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fname.trim()) tempErrors.name = "This field is required";
    if (!formData.lname.trim()) tempErrors.name = "This field is required";
    if (!formData.gender) tempErrors.gender = "Please select a query";
    if (!formData.terms)
      tempErrors.terms =
        "To submit this form, please consent to being contacted";
    if (!formData.email.trim()) {
      tempErrors.email = "Please enter a valid email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, submitting...", formData);
      setSuccessMessage("Message Sent");
      setFormData({
        fname: "",
        lname: "",
        gender: "",
        terms: false,
        email: "",
      });
      setErrors({});
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-32  py-10 ">
      <div className="w-52 absolute top-2 ">
        {successMessage && (
          <div className="mb-4 p-4 bg-Greydarker rounded-xl text-White">
            <div className="flex items-center gap-2">
              <img className=" w-3 h-3" src="./icon-success-check.svg" alt="" />
              <p className="text-xs font-bold">{successMessage}</p>
            </div>
            <p className="text-xs mt-2">
              Thanks for completing the form. We'll be in touch soon!
            </p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-White  p-5 flex flex-col rounded-lg  md:w-128 lg:w-130 xl:w-140 mt-10"
      >
        <h1 className="text-Greydarker text-2xl font-bold font-Karla md:text-3xl lg:text-4xl">
          Contact Us
        </h1>
        {/* <img className=" w-20 h-20" src="./icon-checkbox-check.svg" alt="" />
          <img className=" w-20 h-20" src="./icon-radio-selected.svg" alt="" /> */}
        <div className="flex flex-col md:flex-row md:mt-10 justify-between items-center">
          <div className="flex flex-col ">
            <label
              className="text-xs text-Greydarker mt-6 md:text-xl"
              htmlFor="name "
            >
              First Name*
            </label>
            <input
              type="text"
              id="name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="border-solid border-Greenlighter hover:border-Greenmedium hover:bg-Greenlighter  border-2 w-72  h-10 md:h-16 rounded-md p-5 mt-2 md:w-56 lg:w-72 xl:w-80"
            />
            {errors.name && <p className="text-Red text-xs">{errors.name}</p>}
          </div>
          <div className="flex flex-col">
            <label
              className="text-xs text-Greydarker mt-5 md:text-xl"
              htmlFor="name"
            >
              Last Name*
            </label>
            <input
              className="border-solid border-Greenlighter hover:border-Greenmedium hover:bg-Greenlighter  border-2 w-72  h-10 rounded-md p-5 mt-2  md:h-16 md:w-56 lg:w-72 xl:w-80"
              type="text"
              id="name"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            {errors.name && <p className="text-Red text-xs">{errors.name}</p>}
          </div>
        </div>
        <label
          className="text-xs  text-Greydarker mt-5 md:text-xl"
          htmlFor="email"
        >
          Email Address*
        </label>
        <input
          className="border-solid border-Greenlighter hover:border-Greenmedium hover:bg-Greenlighter border-2  h-10 rounded-md p-5 mt-2  md:h-16"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-Red text-xs">{errors.email}</p>}
        <label
          className="text-xs text-Greydarker mt-5 md:text-xl"
          htmlFor="email "
        >
          Query Type*
        </label>
        <div className="flex items-center gap-4 mt-2 border-2 border-solid border-Greenlighter hover:border-Greenmedium hover:bg-Greenlighter px-5 h-10 rounded-md  md:h-16">
          <input
            className="-mb-1 "
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label className="text-sm text-Greydarker" for="enquiry">
            General Enquiry
          </label>
        </div>
        <div className="flex items-center gap-4 mt-4 border-2 border-solid border-Greenlighter hover:border-Greenmedium hover:bg-Greenlighter px-5 h-10 rounded-md  md:h-16">
          <input
            className="-mb-1 "
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label className="text-sm text-Greydarker" for="support">
            Support Request
          </label>
        </div>
        {errors.gender && <p className="text-xs text-Red">{errors.gender}</p>}
        <label
          className="text-xs text-Greydarker mt-5  md:text-xl"
          htmlFor="email"
        >
          Message*
        </label>
        <textarea
          className="h-44 border-solid border-Greenlighter hover:border-Greenmedium hover:bg-Greenlighter border-2 mt-2 rounded-md p-5  md:h-56"
          name="message"
          id="message"
        ></textarea>
        {errors.name && <p className="text-Red text-xs">{errors.name}</p>}
        <div className="flex items-center gap-4 mt-4  px-5 h-10 rounded-md ">
          <input
            className="-mb-5  "
            type="checkbox"
            name="terms"
            id="consent"
            checked={formData.terms}
            onChange={handleChange}
          />

          <label
            className="  text-sm text-Greydarker mt-5  md:text-xl"
            htmlFor=" #consent"
          >
            I consent to being contacted by the team *
          </label>
        </div>
        {errors.terms && (
          <p className="text-xs text-Red text-left mt-2">{errors.terms}</p>
        )}
        <button
          type="submit"
          className="bg-Greenmedium  text-White py-2 rounded-md mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
