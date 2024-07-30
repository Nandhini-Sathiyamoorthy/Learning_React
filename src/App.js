import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import AboutPage from "./pages/about";
import PageNotFound from "./pages/page_not_found";
import NestedRountingPage from "./pages/nested";
import NestedContent1 from "./pages/nested_content_1";
import NestedContent2 from "./pages/nested_content_2";
import NestedContent3 from "./pages/nested_content_3";
import PrintOutPage from "./pages/print_out_page";
import HomeworkLoginPage from "./pages/homework_login";
import CreateAccount from "./pages/create_account";
import ProfilePage from "./pages/profile";
import ConditionalRendering from "./pages/conditional_rendering";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CRUDoperationPage from "./pages/CURD_operation";
import ApiPage from "./pages/api_page";
import DataBasePage from "./pages/database";
import ClassComponent from "./pages/class_component";

import "./css/stylesheet.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        <Route path="class" element={<ClassComponent></ClassComponent>}></Route>
        <Route
          path="nested"
          element={<NestedRountingPage></NestedRountingPage>}
        >
          <Route
            path="content-1"
            element={<NestedContent1></NestedContent1>}
          ></Route>
          <Route
            path="content-2"
            element={<NestedContent2></NestedContent2>}
          ></Route>
          <Route
            path="content-3"
            element={<NestedContent3></NestedContent3>}
          ></Route>
        </Route>
        <Route path="printout" element={<PrintOutPage></PrintOutPage>}></Route>
        <Route
          path="homework"
          element={<HomeworkLoginPage></HomeworkLoginPage>}
        ></Route>
        <Route path="signup" element={<CreateAccount></CreateAccount>}></Route>
        <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route
          path="hide"
          element={<ConditionalRendering></ConditionalRendering>}
        ></Route>
        <Route path="api" element={<ApiPage></ApiPage>}></Route>
        <Route
          path="crud"
          element={<CRUDoperationPage></CRUDoperationPage>}
        ></Route>
        <Route path="/database" element={<DataBasePage></DataBasePage>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
