function start() {
  let audio_effect = new Audio("music.MP3");
  audio_effect.play()
  let recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "es-ES";
  let output = document.getElementById("textarea");

  recognition.onstart = function () {
    output.value = "I can hear you........";
  };

  recognition.onresult = function (event) {
    let text = event.results[0][0].transcript;
    output.value = text;
  };

  recognition.start();
}
