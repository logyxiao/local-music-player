import { memo, useEffect } from "react";
import "./index.css";

import mp3src from "../../assets/1.mp3";

const Loading = memo(() => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let audioArray = [mp3src, mp3src];
    let audioNum = 0;
    let oAudio = document.getElementById("myaudio");
    oAudio.crossOrigin = "anonymous";
    oAudio.src = mp3src;
    let WIDTH = canvas.width;
    let HEIGHT = canvas.height;
    window.onclick = function () {
      if (oAudio.paused) {
        oAudio.play();
      } else {
        oAudio.pause();
      }
      let oCtx = new AudioContext();
      let audioSrc = oCtx.createMediaElementSource(oAudio);
      let analyser = oCtx.createAnalyser();
      audioSrc.connect(analyser);
      analyser.connect(oCtx.destination);
      analyser.fftSize = 512;
      let bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);
      let dataArray = new Uint8Array(bufferLength);
      console.log(dataArray);
      console.log(dataArray.length);
      let barWidth = WIDTH / bufferLength - 1;
      let barHeight;

      function draw() {
        analyser.getByteFrequencyData(dataArray);
        let x = 0;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          ctx.fillStyle = "rgb(228,255,255)";
          //   上部分可视化
          ctx.fillRect(WIDTH / 2 + x, HEIGHT / 4, barWidth, -barHeight);
          ctx.fillRect(WIDTH / 2 - x, HEIGHT / 4, barWidth, -barHeight);
          //   下部分可视化
          //   ctx.fillRect(WIDTH / 2 + x, HEIGHT / 2, barWidth, barHeight);
          //   ctx.fillRect(WIDTH / 2 - x, HEIGHT / 2, barWidth, barHeight);
          x += barWidth + 1;
        }
        window.requestAnimationFrame(draw);
      }

      draw();
    };

    // oAudio.onended = function () {
    //   console.log("播放结束");
    //   if (audioNum === audioArray.length - 1) {
    //     audioNum = 0;
    //   } else {
    //     audioNum++;
    //   }
    //   oAudio.src = `./src/assets/${audioArray[audioNum]}`;
    //   oAudio.play();
    // };
  }, []);

  return (
    <section>
      <canvas id="canvas"></canvas>

      <audio id="myaudio" src={"../../assets/1.mp3"}></audio>
    </section>
  );
});

export default Loading;
