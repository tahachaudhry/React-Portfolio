// Contact me function:
const ContactMeSection = () => {
  return (
    // Contact me section:
    <div
      name="contactme"
      className="w-full h-screen bg-darkgray flex justify-center items-center p-4"
    >
      {/* Getform : Email form */}
      <form
        method="POST"
        action="https://getform.io/f/e20e3c7c-1287-425f-91e0-6f72b95d310e"
        className="flex flex-col max-w-[600px] w-full"
      >
        {/* Contact title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red text-white">
            Contact Me:
          </p>
          {/* Sub-text */}
          <p className="text-white py-4">
            Please feel free to contact me using the form below or email me
            directly - taha@nyu.edu
          </p>
        </div>

        {/* Name input */}
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />

        {/* Email input */}
        <input
          className="my-4 p-2  bg-white"
          type="email"
          placeholder="Email"
        />

        {/* Message input */}
        <textarea
          name="message"
          rows="8"
          className="bg-white p-2"
          placeholder="Message"
        ></textarea>

        {/* Message me button */}
        <button className="bg-white text-[#000000] border-3 hover:text-white hover:bg-red hover:border-white px-4 py-3 mx-auto my-8 items-center">
          Message me!
        </button>
      </form>
    </div>
  );
};

// Export:
export default ContactMeSection;
