import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserText } from "../redux/markdownSlice";
import { marked } from "marked";

function MarkdownEditor() {
  const dispatch = useDispatch();

  const clicked = useSelector((state) => state.markdown.clickHelp);
  const userText = useSelector((state) => state.markdown.userText);
  const helpText = useSelector((state) => state.markdown.helpText);

  const handleChange = (e) => {
    dispatch(changeUserText(e));
  };

  const createMarkUp = (text) => {
    return { __html: marked(text) };
  };
  return (
    <div className="previewer">
      <textarea
        readOnly={clicked}
        value={clicked ? helpText : userText}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
      <div
        dangerouslySetInnerHTML={createMarkUp(clicked ? helpText : userText)}
        className="right-area"
      ></div>
    </div>
  );
}

export default MarkdownEditor;
