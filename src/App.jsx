import "./App.css";
import img_computer from "/images/image-computer.png";
import img_devices from "/images/image-devices.png";
import Header from "./components/Header";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Parteners from "./components/Parteners";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" text-center text-DarkGrayishBlue font-BaiJamjuree  text-lg min-h-screen  bg-mobile md:bg-desktop bg-no-repeat bg-contain ">
      <main className="px-6 flex flex-col items-center  w-full">
        <Header />
        <CTA
          header="A history of 
           everything you copy"
          text="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        />
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="mt-40 md:max-w-[550px]"
        >
          <h1 className="text-[28px] font-semibold">
            Keep track of your <br className="md:hidden" /> snippets
          </h1>
          <p className="mt-4 text-GrayishBlue text-[16px] ">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </section>
        <section className="mt-14 flex flex-col items-center md:items-stretch md:justify-start md:gap-16 md:flex-row ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:w-1/2  "
          >
            <img src={img_computer} className="md:-translate-x-16" alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="md:w-1/2 md:max-w-[380px] md:text-start "
          >
            <div className="mt-12">
              <h1 className="text-2xl font-semibold">Quick Search </h1>
              <p className="mt-2 text-GrayishBlue text-[16px] t">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="mt-12">
              <h1 className="text-2xl font-semibold">iCloud Sync</h1>
              <p className="mt-2 text-GrayishBlue text-[16px] t">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className="mt-12">
              <h1 className="text-2xl font-semibold">Complete History</h1>
              <p className="mt-2 text-GrayishBlue text-[16px] t">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-32 md:flex md:flex-col md:items-center ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mt-14 max-w-[550px]"
          >
            <h1 className="leading-10 font-semibold  text-[28px]">
              Access Clipboard anywhere
            </h1>
            <p className="mt-4 text-GrayishBlue text-[16px] ">
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <img
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mt-14"
            src={img_devices}
            alt=""
          />
          <div data-aos="fade-up" className="mt-20">
            <h1 className="leading-10 font-semibold  text-[28px]">
              Supercharge your workflow
            </h1>
            <p className="mt-4 text-GrayishBlue text-[16px] t">
              We’ve got the tools to boost your productivity.{" "}
            </p>
          </div>
        </section>
        <Features />
        <Parteners />
        <CTA
          header="Clipboard for iOS and Mac OS"
          text="Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
