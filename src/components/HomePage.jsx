import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Header from "./Header";
import Notes from "./Notes";
import TooltipIcon from "./TooltipIcon";

const HomePage = ({ notes, handleDelete, handleEdit }) => {
  return (
    <>
      <Header justify="justify-around">
        <h1 className="text-xl">NoteApp Simple</h1>
        <div className="grid grid-flow-col gap-3 text-2xl">
          <TooltipIcon
            toLink={"https://github.com/Ibaliqbal"}
            Icon={FaGithub}
            idTooltip={"github-tooltip"}
            contentTooltip={"Github"}
          />
          <TooltipIcon
            toLink={
              "https://instagram.com/muthahhary_iqbal?igshid=MzNlNGNkZWQ4Mg=="
            }
            Icon={FaInstagram}
            idTooltip={"ig-tooltip"}
            contentTooltip={"Instagram"}
          />
          <TooltipIcon
            toLink={
              "https://www.linkedin.com/in/iqbal-muthahhary-muthahhary-5120b6278"
            }
            Icon={FaLinkedin}
            idTooltip={"linkedin-tooltip"}
            contentTooltip={"Linkedin"}
          />
        </div>
      </Header>
      <div className="w-full mt-8">
        <div
          className="w-full grid place-items-center
         gap-y-[10px] lg:grid-cols-3 md:grid-cols-2 px-4 pb-20"
        >
          <Notes notes={notes} handleDelete={handleDelete} />
        </div>
        <Link
          to={"/create-note"}
          className="w-[50px] h-[50px] text-[2rem] bg-white text-center rounded-full fixed bottom-[1.5rem] left-[50%] translate-x-[-50%]"
        >
          +
        </Link>
      </div>
    </>
  );
}

export default HomePage;
