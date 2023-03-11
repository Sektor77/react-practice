import Header from "./components/Header.jsx";
import "./MemeGenerator.css"
import InputComponent from "./components/InputComponent.jsx";
import MainButton from "./components/MainButton.jsx";

const MemeGenerator = () => {
    return (
        <div className={"meme-generator"}>
            <Header></Header>
            <div className={"meme-generator--body"}>
                <form>
                    <div className={"meme-generator--body-inputs"}>
                        <InputComponent></InputComponent>
                        <InputComponent></InputComponent>
                    </div>
                    <MainButton></MainButton>
                </form>
                {/*<img className={"meme-generator--body-image"} src={"./../../../public/success-kid.webp"}/>*/}
                <img className={"meme-generator--body-image"} src={"success-kid.webp"} alt={"successKid"}/>
            </div>
        </div>
    )
}

export default MemeGenerator;