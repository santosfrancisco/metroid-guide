import React, { useRef, useEffect, useState } from "react";
import Layout from '../components/layout';
import Check from '../components/check';

const SM_LOCALSTORAGE_KEY = 'sm_map_checks'
const SM_TOTAL = 100

const SuperMetroidMap = () => {
  const wrapperRef = useRef(null);
  const checkRef = useRef(null);
  const [ checks, setChecks ] = useState([])
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    if (event.target !== checkRef.current && wrapperRef.current && wrapperRef.current.contains(event.target)) {
      const currentChecks = checks;
      const date = new Date()
      setChecks([ ...currentChecks, { idx: date.getTime(), top: event.pageY, left: event.pageX } ])
    }
  }
  const handleRemove = (id) => {
    const currentChecks = checks;
    currentChecks.splice(currentChecks.findIndex(check => check.idx === id), 1)
    setChecks([...currentChecks])
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  useEffect(() => {
    if (checks.length) localStorage.setItem(SM_LOCALSTORAGE_KEY, JSON.stringify(checks))
  }, [ checks ])

  useEffect(() => {
    const checks = localStorage.getItem(SM_LOCALSTORAGE_KEY)
    if (checks) {
      const initialChecks = JSON.parse(checks) || []
      setChecks(initialChecks)
      setCount(initialChecks.length)
    }
  }, [])


  return (
    <Layout pageTitle='Super Metroid map'>
      <img ref={wrapperRef} src="/super-metroid/super-metroid-map.gif" alt="map" />
      {checks.map((check, idx) => (
        <Check
        ref={checkRef}
          key={`${idx}${check.top}`}
          idx={check.idx}
          top={check.top}
          left={check.left}
          handleClick={handleRemove}
        />
      ))}
    </Layout>
  )
};

export default SuperMetroidMap;
