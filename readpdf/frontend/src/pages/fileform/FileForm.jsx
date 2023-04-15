import { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import Tesseract from 'tesseract.js';
import './FileForm.css';
export default function FileForm() {
    const [ocr, setOcr] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [textResult, setTextResult] = useState("");



    // const worker = createWorker({
    // });
    const convertImageToText = useCallback(async () => {
        if (!selectedImage) return;
        // await worker.loadLanguage('eng');
        // await worker.initialize('eng');
        const {
            data: { text },
        } = await Tesseract.recognize(selectedImage);
        // const { data } = await worker.recognize(selectedImage);
        // setTextResult(data.text);
        // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
        console.log(text);
        setTextResult(text);
    }, [selectedImage]);
    const convertImageToText1 = async () => {
        // if (!imageData) return;
        // worker.loadLanguage
        // await worker.loadLanguage("eng");
        // await worker.initialize("eng");
        const {
            data: { text },
        } = await Tesseract.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
        setOcr(text);
    };
    convertImageToText1()
    // useEffect(() => {
    //     convertImageToText();
    // }, [selectedImage, convertImageToText])

    const handleChangeImage = e => {
        if (e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        } else {
            setSelectedImage(null);
            setTextResult("")
        }
    }

    return (
        <div className="App">
            <h1>ImText</h1>
            <p>Gets words in image!</p>
            <div className="input-wrapper">
                <label htmlFor="upload">Upload Image</label>
                <input type="file" id="upload" accept='image/*' onChange={handleChangeImage} />
            </div>

            <div className="result">
                {selectedImage && (
                    <div className="box-image">
                        <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
                    </div>
                )}
                {textResult && (
                    <div className="box-p">
                        <p>{textResult}</p>
                    </div>
                )}
                {ocr}
            </div>
        </div>
    );
}
