const microphone = document.querySelector(".microphone")

let  content = document.querySelector(".message");
let p = document.createElement("p");

const greeting = [
    "Hey welcome back dude",

    "It is an honor to have such a hardworking fellow like you to join us! Welcome!",

    "Welcome! We are honored to receive you like your presence is crucial!",

    "It is our great pleasure to have you on board! A hearty welcome to you!",

    "Welcome to you! We believe you would excel in your job and achieve many great things!",

    "We welcome you cordially to grace us with your presence! Feel at home, please!"

]

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition;
recognition.interimResults = true;

microphone.addEventListener("click", () =>{

    recognition.addEventListener("result", (e) =>{
        const text = Array.from(e.results)
            .map(results => results[0])
            .map(results => results.transcript)
            .join('')

        p.textContent = text;
        content.appendChild(p)
        
        if(e.results[0].isFinal){

            if(text.includes("hey Siri")){
                p = document.createElement("p")
                p.classList.add("reply")
                p.innerHTML = greeting[Math.floor(Math.random() * greeting.length)] + " How can i help you";
                content.appendChild(p)
                readOutLoud(p.innerHTML)

                console.log(p.innerHTML)
            }

            if(text.includes("open YouTube")){
                p = document.createElement("p")
                p.classList.add("reply")
                p.innerHTML = "opeing youtube"
                content.appendChild(p)
                window.open("https://www.youtube.com")

                readOutLoud(p.innerHTML)

            }

            p = document.createElement("p")

            function readOutLoud(sentences){
                const speech =  new SpeechSynthesisUtterance();

                speech.text = sentences;
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;

                window.speechSynthesis.speak(speech)

            }
        }
        console.log(e.results)
    })

    recognition.addEventListener("end", () =>{
        recognition.start()
    })

    recognition.start()
})
