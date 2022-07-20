import React, {useState, useEffect} from "react"

function Clock({men}) {
  const [seg, setSeg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeg(seg => seg + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('aaa', seg)
      men(seg)
    return () => {
      
    }
  }, [seg])

  return (
    <h1>
      {seg}
    </h1>
  )
}

export default Clock