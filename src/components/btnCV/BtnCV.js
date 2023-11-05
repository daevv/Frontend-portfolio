import { saveAs } from "file-saver";
import cvText from "../../helpers/cv";
import "./style.css";

const BtnCV = () => {
  const handleDownloadClick = () => {

    const blob = new Blob([cvText], { type: "text/plain" });

    saveAs(blob, "cv_Dediaev.txt");
  };

  return (
    <button className="btn" onClick={handleDownloadClick}>
      Скачать файл
    </button>
  );
};

export default BtnCV;
