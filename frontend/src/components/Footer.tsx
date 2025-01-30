// import { FaInstagram } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

const Contacts = () => {
    return (
        <div id="contact" className="flex flex-col justify-between bg-[#f7f1de] text-black">

            {/* Rotaract Club Emphasis Section */}
            <div className="px-5 py-7">
                <div className="mb-5 text-center">
                    <h2 className="font-bold text-2xl">
                        Proudly Supported by the Rotaract Club of SIET
                    </h2>
                    <p>Connecting communities, fostering innovation, and building a better tomorrow.</p>
                    <p className="mt-2">
                        For any campus-based events or support, feel free to reach out to us!
                    </p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <a
                        href="https://instagram.com/rotaractsiet"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Rotaract SIET Instagram"
                        className="text-2xl text-white hover:text-gray-300"
                    >
                        {/* <FaInstagram size={30} /> */}
                    </a>
                    <a
                        href="mailto:rotaractsiet2425@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email Rotaract SIET"
                        className="text-2xl text-white hover:text-gray-300"
                    >
                        {/* <SiGmail size={30} /> */}
                    </a>
                </div>
            </div>

            {/* Header Section */}
            <div className='flex flex-col justify-center items-center gap-5 px-5 py-10'>
                <h1 className='font-bold text-3xl text-center'>Contact</h1>
                <div className="flex flex-col items-center gap-3 text-md">
                    <div className="text-center">
                        <p className="font-semibold">Technical Support:</p>
                        <a
                            href="tel:+917010047730"
                            className="hover:text-blue-300 underline"
                        >
                            Prakash Dass R, +91 70100 47730
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">Event Support:</p>
                        <a
                            href="tel:+919597915158"
                            className="hover:text-blue-300 underline"
                        >
                            AAAAAAAAAA, +99 99999999999
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1>
                        Created with ❤️ by{' '}
                        <a
                            className="hover:text-blue-300 underline"
                            href="https://www.rprakashdass.in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prakash Dass R
                        </a>{' '}
                        || All Avenue Chair, Rotaract SIET
                    </h1>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bottom-0 flex justify-center items-center p-5 w-full">
                <p className="inline-flex flex-row items-center gap-3 text-center text-white">
                    For more updates, follow Rotaract SIET:
                    <a
                        href="https://instagram.com/rotaractsiet"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram page of Rotaract SIET"
                        className="text-white hover:text-gray-300 underline underline-offset-2"
                    >
                        Instagram
                        {/* <FaInstagram size={30} /> */}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contacts;
