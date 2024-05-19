import Particles from "react-particles"
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
import Countdown from "react-countdown"

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Waiting For 2024..", "2024 Is Coming In" ,"Bye 2023!"])

  const ParticleInitialization = async (engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  return (
    <>
      <Particles
        init={ParticleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter words={newYearMessage}
            loop={false}
            cursorStyle={"🎉"}
            cursorColor="purple"
            cursor
            typeSpeed={50}
            deleteSpeed={45} />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
            "Selamat", "Tahun", "baru", "HNY 2024", "Welcome To 2024🎇"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
