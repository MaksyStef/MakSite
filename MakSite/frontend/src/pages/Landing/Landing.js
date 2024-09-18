import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Girl from '../../components/ui/Girl';

import './assets/styles/landing.scss';


export default function Landing() {
  const sectorTwoRef = useRef();
  return (
    <div className="container-fluid p-0 full-page">
      <div className="row g-0 flex-column">
        <section className="col-12 sector sector_1 bg-primary text-white">
          <div className="sector__upper-row row g-0 flex-row w-100 h-100">
            <div className="sector__column row g-0 flex-column justify-content-center align-items-center">
              <div className="sector__lower-row row g-0 flex-column justify-content-center align-items-center text-center">
                <h1>Hello! I Will Build For You Seamless Digital Experience from Frontend to Backend</h1>
                <a href="" className="btn btn-lg btn-success btn-success_1 m-4 w-50">Contact Me</a>
                <button onClick={() => sectorTwoRef.current.scrollIntoView({behavior: 'smooth'})}
                className="btn btn_further p-2" type="button">Discover Further!</button>
              </div>
            </div>
            <div className="sector__column row g-0 flex-column justify-content-center align-items-center">
              <div className="sector__lower-row row g-0 flex-row justify-content-center align-items-center text-center">
                <Canvas camera={{position:[0.5,0.5,2], fov:60}}>                  
                  <ambientLight intensity={5} />
                  <pointLight position={[0, 1.5, 1.5]} intensity={3} />
                  <pointLight position={[-0.75, -0.75, -0.75]} intensity={3} />
                  <Suspense fallback={null}>
                    <Girl />
                  </Suspense>
                  <OrbitControls enableZoom={false} enablePan={false} enableDamping={false} />
                </Canvas>
              </div>
            </div>
          </div>
        </section>
        <section ref={sectorTwoRef} className="col-12 sector sector_2 bg-secondary text-white">
          <h1 className="text-center">Sector 2</h1>
        </section>
        <section className="col-12 sector bg-success text-white">
          <h1 className="text-center">Sector 3</h1>
        </section>
        <section className="col-12 sector bg-danger text-white">
          <h1 className="text-center">Sector 4</h1>
        </section>
        <section className="col-12 sector bg-warning text-white">
          <h1 className="text-center">Sector 5</h1>
        </section>
        <section className="col-12 sector bg-info text-white">
          <h1 className="text-center">Sector 6</h1>
        </section>
      </div>
    </div>
  )  
}
