import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import router from "./routes/Routes";

const App = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
