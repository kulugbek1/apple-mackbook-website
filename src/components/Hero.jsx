import { useEffect } from "react"
import { useRef } from "react"

export default function Hero() {
  const videRef = useRef()

  useEffect(() => {
    if (videRef.current) videRef.current.playbackRate = 2
  }, [])

  return (
    <section id="hero">
      <h1>MacBook Pro</h1>
      <img src="/title.png" alt="macbook title" />

      <video src="/videos/hero.mp4" ref={videRef} autoPlay muted playsInline ></video>

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 month</p>
    </section>
  )
}
