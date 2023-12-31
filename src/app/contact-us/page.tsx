import BackgroudImage from "@/assets/images/bg/1.jpg";
import Image from "next/image";
export default function Contact() {
  return (
    <>
      {/* Start */}
      <section className="py-24 w-full table relative h-[60vh] ">
        <Image
          src={BackgroudImage}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
          }}
        />
        <div className="absolute inset-0 bg-[slategray]  opacity-80"></div>
        <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12 border-b-2 border-[#C50017] w-[70%] md:w-96 m-auto md:m-0">
            <h4 className="text-black lg:text-[80px] text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Contact
            </h4>
          </div>
        </div>
      </section>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="contact"
      >
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-[#C50017] text-base font-medium uppercase mb-2">
              Contact us
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Get In Touch !
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                <form>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input"
                        placeholder="Name :"
                      />
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-input"
                        placeholder="Email :"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <input
                        name="subject"
                        id="subject"
                        className="form-input"
                        placeholder="Subject :"
                      />
                    </div>

                    <div className="mb-5">
                      <textarea
                        name="comments"
                        id="comments"
                        className="form-input textarea h-28"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                  <div className="cursor-pointer bg-black hover:bg-white hover:border-2 text-white hover:!text-black hover:border-black w-[150px] h-[40px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
                    <p> Send Message</p>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:ms-8">
                <div className="flex">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-phone block rounded text-2xl dark:text-white mb-0"></i>
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      Phone
                    </h5>
                    <a href="tel:+152534-468-854" className="text-slate-400">
                      +152 534-468-854
                    </a>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-envelope block rounded text-2xl dark:text-white mb-0"></i>
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      Email
                    </h5>
                    <a
                      href="mailto:contact@example.com"
                      className="text-slate-400"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"></i>
                  </div>

                  <div className="flex-1 ms-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">
                      Location
                    </h5>
                    <p className="text-slate-400 mb-2">
                      C/54 Northwest Freeway, Suite 558, Houston, USA 485
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[90%] md:w-[60%] m-auto h-[30vh] bg-slate-300 flex justify-center items-center mb-12">
        <p>Map Here</p>
      </div>
    </>
  );
}
