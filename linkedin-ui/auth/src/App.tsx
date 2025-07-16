import { Route, Routes } from "react-router";
import { appRoutes } from "./routes";

function AuthApp() {
  return (
    <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
    </Routes>
  )
}

export default AuthApp
