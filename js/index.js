const type = new Typed('.text',{
    strings: ['Voice'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged=()=>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0] 
    voices.forEach((voice,i) => ( voiceSelect.options[i]= new Option(voice.name,i)))
}
voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value]
})
document.getElementById('listen').addEventListener('click',function(){
    speech.text = document.getElementById('text-area').value ;
    window.speechSynthesis.speak(speech)
})