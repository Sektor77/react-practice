const Header = () => {
    return (
        <div className={"meme-generator--header"}>
            <div className={"meme-generator--header-title-with-logo"}>
                <img className={"meme-generator--header-logo"} src={"../public/trollFace.png"} alt={"trollFace"}/>
                <h1 className={"meme-generator--header-title"}>Meme Generator</h1>
            </div>
            <p className={"meme-generator--header-secondary-title"}>React Course - Project 3</p>
        </div>

    )
}

export default Header;