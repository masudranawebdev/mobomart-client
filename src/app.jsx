import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import router from "./routes/Routes";
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
      <Toaster />
    </Suspense>
  );
};

export default App;
