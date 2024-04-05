import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import HistoryPage from "@/pages/history/ui/Page";

export const AppRouter = createBrowserRouter([
    {
        element: <BaseLayout/>,
        errorElement: <div>Error</div>,
        children: [
            {path: '/', element: <MainPage/>},
            {path: '/history', element: <HistoryPage/>}
        ]
    },
  ]);