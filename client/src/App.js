import { useRef, useState, useEffect } from "react";
import './App.css';
import { uploadFile } from "./services/api.js";

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  console.log(file);

  return (
    <div className="wrapper">
      <div className="main-div main-div1">
        <h1>File<span>Fly!📂</span></h1>
        <h2>Upload and share the download link</h2>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
         ref={fileInputRef}
         style={{display: 'none'}}
         onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank" rel="noreferrer">{result}</a>
      </div>
    </div>

  );
}

export default App;
