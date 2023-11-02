import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import Header from "./Header";
import TextareaAutosize from "react-textarea-autosize";
import FragmentsInput from "./FragmentsInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { format } from "date-fns";

const CreateNote = ({
  notes,
  newTitle,
  newDescription,
  setNotes,
  setNewTitle,
  setNewDescription,
  sumTyping,
  setSumTyping,
}) => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  useEffect(() => {
    titleRef.current.focus();
  }, []);
  const handleSave = () => {
    if (newTitle || newDescription !== "") {
      const id = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
      const addNewNote = {
        id,
        title: newTitle,
        description: newDescription,
        date: format(new Date(), 'dd MMMM, yy '),
      };
      const allNote = [...notes, addNewNote];
      setNotes(allNote);
      setNewTitle("");
      setNewDescription("");
      setSumTyping(0);
      navigate("/");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Header justify="justify-between">
        <Link to={"/"} className="grid place-items-center">
          <FaArrowLeft className="text-3xl cursor-pointer" />
          <p>Back</p>
        </Link>
        <h1 className="text-xl">Create Note</h1>
        <div className="grid place-items-center">
          <button>
            <FaCheck className="text-3xl cursor-pointer" onClick={handleSave} />
          </button>
          <p>Save</p>
        </div>
      </Header>
      <FragmentsInput>
        <div className="mt-8 px-4 py-4 w-full">
          <input
            type="text"
            className="w-full h-12 text-xl border-b-2 px-2 py-2 text-white focus:outline-none bg-gray-800"
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title"
            ref={titleRef}
          />
        </div>
        <div className="mt-2 px-4 py-4 flex gap-x-1 text-white">
          <p className="inline-blcok">{format(new Date(), "dd MMMM")} |</p>
          <p className="inline-block">{sumTyping} Character</p>
        </div>
      </FragmentsInput>
      <FragmentsInput>
        <div className="px-4 py-4">
          <TextareaAutosize
            onHeightChange={(height) => console.log(height)}
            className="w-full border-0 text-white focus:outline-none text-[.9rem] bg-gray-800 px-4 py-4"
            placeholder="Please enter a word or sentence"
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
            onKeyUp={() => setSumTyping(newDescription.replace(/\s+/g, "").length)}
          />
        </div>
      </FragmentsInput>
    </>
  );
}

export default CreateNote;
