import Navbar from "./Navbar";
import profilePicture from "../assets/images/me.JPG";

export default function Header() {
  return (
    <div className={`pb-[3.75rem]`}>
      <Navbar />
      <div className={"w-full flex items-center flex-col pt-[2.06rem]"}>
        <div className={`h-[10rem] w-[10rem] rounded-full  object-cover`}>
          <img
            src={profilePicture}
            alt="Lawrence Ughonu"
            className={`w-full h-full header-image rounded-full`}
          />
        </div>
        <h1
          className={`text-dark mt-[2.215rem] text-[2rem] leading-[2.5rem] max-w-[19.5rem] mx-auto font-bold text-center`}
        >
          Hi, I am Lawrence Ughonu
        </h1>

        <p
          className={`max-w-[20.5rem] text-dark text-[1rem] text-center mt-[2.215rem] mx-auto `}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          consequuntur excepturi officiis inventore a ipsa, ad esse nam, ratione
          debitis quas iusto aut ab distinctio? Quis iste molestias dolorum ad.
          Nisi aspernatur mollitia consequatur, voluptate id perferendis
        </p>

        <div className={`mt-[2.25rem]`}>
          <button
            className={`bg-primary text-white px-[1.25rem] py-[0.6875rem] w-full flex justify-center rounded-sm`}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
