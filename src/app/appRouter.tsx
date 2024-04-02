import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        errorElement: <div>Error</div>,
    },
  ]);