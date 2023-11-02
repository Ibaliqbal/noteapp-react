import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
export default function Notes({ notes, handleDelete }) {
  return notes.length > 0 ? (
    notes.map((note) => (
      <div
        className="w-[90%] max-w-[90%] h-[8.5rem] bg-gray-900 text-white px-[.75rem] py-[.5rem] rounded-[5px] relative lg:max-w-sm"
        key={note.id}
      >
        <h1 className="text-2xl mb-2">{note.title}</h1>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis mt-2">
          {note.description}
        </p>
        <div className="absolute top-[.5rem] right-[.5rem] h-auto flex mr-[7px] gap-x-2">
          <Link to={`/edit-note/${note.id}`}>
            <FaEdit />
          </Link>
          <FaTrashAlt
            className="text-red-600 cursor-pointer"
            onClick={() => handleDelete(note.id)}
          />
        </div>
        <span className="absolute bottom-2 text-white right-2">
          {note.date}
        </span>
      </div>
    ))
  ) : (
    <p className="text-white">Tidak ada Notes</p>
  );
}
