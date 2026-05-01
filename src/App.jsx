import Cursor      from './components/Cursor'
import Navbar      from './components/Navbar'
import Hero        from './sections/Hero'
import StatsBar    from './sections/StatsBar'
import About       from './sections/About'
import Services    from './sections/Services'
import TrackRecord from './sections/TrackRecord'
import Compliance  from './sections/Compliance'
import Contact     from './sections/Contact'
import Footer      from './sections/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <TrackRecord />
        <Compliance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
