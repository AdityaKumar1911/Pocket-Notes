import React, { useState } from "react";
import "./NewGroupPopup.css";
import "reactjs-popup/dist/index.css";

function CreateNotesPopup({ groupNamesParent, setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");
  

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  // const [isVisible, setIsVisible] = useState(true);

  // const toggleVisibility = () => {
  //  document.getElementsByClassName('PopUp').style.visibility = 'hidden';
  // };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="PopUp">
      <div className="Ptitle">Create New Notes Group</div>
      {/* <button onClick={toggleVisibility}>Aditya</button> */}
      <div className="pinput">
        <p id="intext">Group Name</p>

        <input
          id="pinput"
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />
      </div>
      <div className="P-C-input">
        <p id="gctext">Choose colour</p>
        <div className="P-C-I-color">
          <div
            className={`popup__color__input__color__1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <div className="popup__close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNotesPopup;
