import './App.css'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function CubeScene() {
  return (
    <Canvas style={{ height: 300, width: 300 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="black" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app-container">
      <header>
        <h1 className="site-title">Dylan Monge</h1>
        <p className="tagline">AI & Data Engineer</p>

        <div className="nav-buttons">
          <button onClick={() => setActiveSection('about')}>About Me</button>
          <button onClick={() => setActiveSection('work')}>My Work</button>
          <button onClick={() => setActiveSection('contact')}>Contact</button>
        </div>
      </header>

      <div className="canvas-wrapper">
        <CubeScene />
      </div>

      <div className="section-content">
        {activeSection === 'about' && <p>This is the About Me section.</p>}
        {activeSection === 'work' && <p>This is the My Work section.</p>}
        {activeSection === 'contact' && <p>This is the Contact section.</p>}
      </div>
    </div>
  )
}

export default App
