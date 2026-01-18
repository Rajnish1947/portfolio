
// // import React, { useRef, useState } from "react";
// // import emailjs from "@emailjs/browser";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Contact = () => {
// //   const form = useRef();
// //   const [isSent, setIsSent] = useState(false);

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
// //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
// //         form.current,
// //         process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
// //       )
// //       .then(
// //         () => {
// //           setIsSent(true);
// //           form.current.reset();
// //           toast.success("Message sent successfully! ✅", {
// //             position: "top-right",
// //             autoClose: 3000,
// //             theme: "dark",
// //           });
// //         },
// //         (error) => {
// //           console.error("Error sending message:", error);
// //           toast.error("Failed to send message. Please try again.", {
// //             position: "top-right",
// //             autoClose: 3000,
// //             theme: "dark",
// //           });
// //         },
// //       );
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
// //     >
// //       <ToastContainer />

// //       {/* Section Title */}
// //       <div className="text-center mb-16">
// //         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
// //         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
// //         <p className="text-gray-400 mt-4 text-lg font-semibold">
// //           I’d love to hear from you—reach out for any opportunities or
// //           questions!
// //         </p>
// //       </div>

// //       {/* Contact Form */}
// //       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
// //         <h3 className="text-xl font-semibold text-white text-center">
// //           Connect With Me <span className="ml-1">🚀</span>
// //         </h3>

// //         <form
// //           ref={form}
// //           onSubmit={sendEmail}
// //           className="mt-4 flex flex-col space-y-4"
// //         >
// //           {/* Name matches {{name}} */}
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Your Name"
// //             required
// //             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
// //           />

// //           {/* Email matches {{email}} */}
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Your Email"
// //             required
// //             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
// //           />

// //           {/* Subject matches {{title}} */}
// //           <input
// //             type="text"
// //             name="title"
// //             placeholder="Subject"
// //             required
// //             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
// //           />

// //           {/* Message matches {{message}} */}
// //           <textarea
// //             name="message"
// //             placeholder="Message"
// //             rows="4"
// //             required
// //             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
// //           />

// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
// //           >
// //             Send
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         form.current,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           setIsSent(true);
//           form.current.reset();
//           toast.success("Message sent successfully! ✅", {
//             position: "top-right",
//             autoClose: 3000,
//             theme: "dark",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error("Error sending message:", error);
//           toast.error("Failed to send message. Please try again.", {
//             position: "top-right",
//             autoClose: 3000,
//             theme: "dark",
//           });
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
//     >
//       <ToastContainer />

//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           I’d love to hear from you—reach out for any opportunities or
//           questions!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="mt-4 flex flex-col space-y-4"
//         >
//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Subject */}
//           <input
//             type="text"
//             name="title"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Message */}
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md transition ${
//               loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
//             }`}
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
