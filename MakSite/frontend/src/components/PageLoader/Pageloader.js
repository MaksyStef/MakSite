import { useState, useRef, useEffect } from "react"
import './assets/pageloader.scss'

export default function PageLoader(props) {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  useEffect(()=> {
    let random;
    let translateX = 0;
    let translateY = 0;
    function getRandomMovement () {
      random = (Math.floor((Math.random()*15)+1));
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      return (random * plusOrMinus);
    }

    const intervalIds = [firstRef, secondRef, thirdRef].map((ref) => {
      return setInterval(() => {
        if (ref.current) {
          translateX += getRandomMovement();
          translateY += getRandomMovement();
          ref.current.style.transform = `translate(${translateX}%, ${translateY}%)`;
        }
      }, 250);
    });

    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };

  }, [])

  return (
    <div ref={props.ref} className="page-loader vw-100 vh-100 position-relative">
      <div ref={firstRef} className="page-loader__item page-loader__item_1"></div>
      <div ref={secondRef} className="page-loader__item page-loader__item_2"></div>
      <div ref={thirdRef} className="page-loader__item page-loader__item_3"></div>
    </div>
  )
}