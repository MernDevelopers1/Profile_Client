import { useState } from "react";
import { IoPaperPlaneSharp } from "react-icons/io5";


const Contact = ({ isStandalone = false }) => {
    const [result, setResult] = useState("");
    console.log('result', result)

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "57b52d6f-ce9f-4d3c-aaa8-ab8b4847716c");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                alert("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("An error occurred. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className={`bg-lightyellow ${isStandalone ? "full-screen" : ""}`}>
            <div className="container mx-auto">
                <div className="py-6 md:py-16">
                    <div className="flex justify-center relative">
                        <h1 className="text-xl uppercase font-semibold text-lightblack">Contact Us</h1>
                    </div>
                    <h2 className="text-center text-lightblack text-3xl md:text-5xl font-semibold leading-tight md:leading-normal mb-2">Have a Project?</h2>
                    <p className="text-center mb-6 px-2 md:px-24 lg:px-56 text-lightblack">Located far beyond the horizons, bridging the East and the West reach out to elevate your business growth. Let’s connect and create opportunities together.</p>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full md:w-9/12 mx-auto">
                            <form
                                onSubmit={onSubmit}
                                className="px-3 lg:px-10"
                            >
                                <div className="inputbox mb-[6px] md:mb-3 relative">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full bg-gray-100 px-3 py-2 rounded-md outline-none shadow-2xl text-black text-lg h-12 border-none placeholder-lightblack"
                                        required
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="inputbox mb-[6px] md:mb-3 relative">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full bg-gray-100 px-3 py-2 rounded-md outline-none shadow-2xl text-black text-lg h-12 border-none placeholder-lightblack"
                                        required
                                        placeholder="Enter Email ID"
                                    />
                                </div>
                                <div className="inputbox mb-4 md:mb-8 relative">
                                    <textarea
                                        name="msg"
                                        id="msg"
                                        rows="5"
                                        className="w-full bg-gray-100 px-3 py-2 rounded-md outline-none shadow-2xl text-black text-lg border-none placeholder-lightblack"
                                        required
                                        placeholder="Enter Message"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-lightblack text-lightyellow text-2xl px-16 py-3 rounded-lg hover:scale-105 transition-transform"
                                    >
                                        <p className="flex gap-3 items-center">
                                            Send <IoPaperPlaneSharp className="text-lightyellow text-2xl" />
                                        </p>

                                    </button>
                                </div>
                            </form>
                            {/* {result && <p className="mt-4 text-white">{result}</p>} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
