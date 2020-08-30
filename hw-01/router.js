import React, { useEffect } from "react";

import Home from "./screens/main/Home";
import Auth from "./screens/auth/Auth";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return <Auth />;
  }
  return <Home />;
};

export default useRoute;
