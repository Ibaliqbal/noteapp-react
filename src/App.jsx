import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/404";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import Swal from "sweetalert2";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [sumTyping, setSumTyping] = useState(0);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure ? ",
      text: "You want to delete this note",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#b91c1c",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        const noteNew = notes.filter((note) => note.id !== id);
        setNotes(noteNew);
        Swal.fire("Deleted !", "Your note has been deleted ", "success");
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage notes={notes} handleDelete={handleDelete} />,
      errorElement: <Error />,
    },
    {
      path: "/create-note",
      element: (
        <CreateNote
          sumTyping={sumTyping}
          notes={notes}
          newTitle={newTitle}
          newDescription={newDescription}
          setNewTitle={setNewTitle}
          setNotes={setNotes}
          setNewDescription={setNewDescription}
          setSumTyping={setSumTyping}
        />
      ),
    },
    {
      path: "/edit-note/:id",
      element: (
        <EditNote
          notes={notes}
          sumTyping={sumTyping}
          editTitle={editTitle}
          editDescription={editDescription}
          setEditTitle={setEditTitle}
          setEditDescription={setEditDescription}
          setSumTyping={setSumTyping}
          setNotes={setNotes}
        />
      ),
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
