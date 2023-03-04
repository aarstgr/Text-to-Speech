import speechText from "./Components/speech";

const App = ()=> {
    const contain =document.createElement("div");
    contain.append(speechText());
    return (contain);
}

export default  App;