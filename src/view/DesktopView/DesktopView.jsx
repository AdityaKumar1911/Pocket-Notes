import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/SDesktop/DesktopSidebar";
import DesktopHome from "../../components/DesktopHome/DesktopHome";
import DesktopNotes from "../../components/NotesDesktop/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
