import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock({ men }) {
  const [seg, setSeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeg((segundo) => segundo + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => () => {
    men(seg);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seg]);

  return (
    <span className="Clock">
      <span className="partClock">{Math.floor(seg / 100) > 9 ? Math.floor(seg / 100) : `0${Math.floor(seg / 100)}` }</span>
      .
      <span className="partClock">
        {seg % 100 > 9 ? seg % 100 : `0${seg % 100}`}
      </span>
    </span>
  );
}

export default Clock;
