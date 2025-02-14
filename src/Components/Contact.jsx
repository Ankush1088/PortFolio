import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false); // ✅ Loading state

  const onSubmit = async (data) => {
    setLoading(true); // ✅ Start loading
    //https://getform.io/f/awnqnqdb
    try {
      await axios.post("https://getform.io/f/bejrjrqa", data);
      toast.success("Your message has been sent");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 relative z-10"
    >
      <hr className="mb-6 border-gray-300" />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h1>
      <span className="text-gray-600">Please fill out the form below to contact me</span>

      {/* Form Container */}
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg w-full md:w-2/3 lg:w-1/2 px-8 py-6 rounded-xl border border-gray-300 relative z-20"
        >
          <h1 className="text-xl font-semibold mb-4 text-gray-800">Send Your Message</h1>

          {/* Full Name Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              placeholder="Enter Your Full Name"
              className="shadow-md rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="Your email address"
              className="shadow-md rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              placeholder="Your message"
              className="shadow-md rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
            ></textarea>
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-300 text-lg font-medium ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
