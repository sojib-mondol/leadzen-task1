import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import Information from "../../components/information/Information";
import Main from "../../Layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Information></Information>,
            },
            {
                path: '/detals',
                element: <DetailsPage></DetailsPage>
                //loader: ({params}) => fetch(`fakeData.json/detals/${params.id}`)
            }
            
        ]
    }
])

export default router;