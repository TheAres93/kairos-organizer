import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import TasksList from "../pages/TasksList";
import AddTasks from "../pages/AddTasks";
import NotFound from "../pages/NotFound";

export default function AppRouter() {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/kairos-organizer/" element={<Home />} />
      <Route path="/kairos-organizer/AboutUs" element={<AboutUs />} />
      <Route path="/kairos-organizer/AddTasks" element={<AddTasks />} />
      <Route path="/kairos-organizer/TasksList">
        <Route index element={<TasksList action="All" />} />
        <Route path="/kairos-organizer/TasksList/Complete" element={<TasksList action="Complete" />} />
        <Route path="/kairos-organizer/TasksList/Incomplete" element={<TasksList action="Incomplete" />} />
        <Route path="/kairos-organizer/TasksList/EditOn" element={<TasksList action="EditOn" />} />
      </Route>
    </Routes>
  );
}
