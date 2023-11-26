import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { blogLoader, Blogpage } from "./pages/Blogpage";
import { Createpost } from "./pages/Createpost";
import { Editpost, updatePostAction } from "./pages/Editpost";
import { postLoader, Singlepage } from "./pages/Singlepage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { LoginPage } from "./pages/Loginpage";
import { Layout } from "./components/Layout";
import { RequireAuth } from "./hoc/RequireAuth";
import ErrorPage from "./pages/Errorpage";
import { createPostAction } from "./api/api";
import { Contacts } from './components/Contacts.jsx'
import { Team } from './components/Team.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="team" element={<Team />} />
      </Route>
      <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route
        path="posts/:page"
        element={<Blogpage />}
        loader={blogLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="posts/id/:id" element={<Singlepage />} loader={postLoader} />
      <Route
        path="posts/id/:id/edit"
        element={<Editpost />}
        loader={postLoader}
        action={updatePostAction}
      />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
        action={createPostAction}
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

export default router;
