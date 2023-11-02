import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import FragmentsInput from "./FragmentsInput";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
const EditNote = ({
  notes,
  sumTyping,
  setEditDescription,
  editDescription,
  setEditTitle,
  editTitle,
  setSumTyping,
  setNotes,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const descRef = useRef(null);
  const getNote = notes.find((note) => note.id === parseInt(id));
  useEffect(() => {
    if (getNote) {
      setEditDescription(getNote.description);
      setEditTitle(getNote.title);
    }
  }, [getNote]);

  useEffect(() => {
    if (editDescription) {
      setSumTyping(editDescription.replace(/\s+/g, "").length);
      descRef.current.focus()
    } 
  }, [editDescription]);

  const handleEdit = () => {
    const editNote = {
      id: parseInt(id),
      title: editTitle,
      description: editDescription,
      date: format(new Date(), "dd MMMM, yy"),
    };
    const index = notes.findIndex((note) => note.id === parseInt(id));
    notes.splice(index, 1, editNote);
    const updateNote = [
      ...notes.slice(0, index),
      editNote,
      ...notes.slice(index + 1),
    ];
    setNotes(updateNote);
    setEditTitle("");
    setEditDescription("");
    setSumTyping(0);
    navigate("/");
  };

  return (
    <>
      <Header justify="justify-between">
        <Link to={"/"} className="grid place-items-center">
          <FaArrowLeft className="text-3xl cursor-pointer" />
          <p>Back</p>
        </Link>
        <h1 className="text-xl">Edit Note</h1>
        <div className="grid place-items-center">
          <button>
            <FaCheck className="text-3xl cursor-pointer" onClick={handleEdit} />
          </button>
          <p>Update</p>
        </div>
      </Header>
      {getNote ? (
        <>
          <FragmentsInput>
            <div className="mt-8 px-4 py-4 w-full">
              <input
                type="text"
                className="w-full h-12 text-xl border-b-2 px-2 py-2 text-white focus:outline-none bg-gray-800"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="mt-2 px-4 py-4 flex gap-x-1 text-white">
              <p className="inline-blcok">{format(new Date(), 'dd MMMM')} |</p>
              <p className="inline-block">{sumTyping} Character</p>
            </div>
          </FragmentsInput>
          <FragmentsInput>
            <div className="px-4 py-4">
              <TextareaAutosize
                onHeightChange={(height) => console.log(height)}
                className="w-full border-0 text-white focus:outline-none text-[.9rem] bg-gray-800 px-4 py-4"
                placeholder="Please enter a word or sentence"
                value={editDescription}
                ref={descRef}
                onChange={(e) => {
                  setEditDescription(e.target.value);
                }}
                onKeyUp={() => setSumTyping(editDescription.replace(/\s/g, "").length)}
              />
            </div>
          </FragmentsInput>
        </>
      ) : (
        <p className="text-center text-white mt-4">Note cant deteced</p>
      )}
    </>
  );
}

export default EditNote;
