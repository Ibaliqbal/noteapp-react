import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError()
 return (
   <div className="flex justify-center items-center min-h-screen flex-col text-white">
     <h1 className="text-3xl font-bold">Ooopsss...</h1>
     <p className="my-5 text-xl">Sorry, unexpected error has occured</p>
     <p className="text-lg">{error.statusText || error.message}</p>
   </div>
 );
}

export default Error;