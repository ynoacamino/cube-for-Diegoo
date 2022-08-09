import './Average.css';
import React from 'react';

function Average({
  statistics,
}) {
  return (
    <div className="Average">
      <div className="boxAverage">
        <span className="spanNameAverage">Media:</span>
        <span className="spanNumAverage">{statistics.media / 100 || '- -'}</span>
      </div>
      <div className="boxAverage">
        <span className="spanNameAverage">Mejor:</span>
        <span className="spanNumAverage">{statistics.best === 999999 ? '- -' : statistics.best / 100}</span>
      </div>
      <div className="boxAverage">
        <span className="spanNameAverage">Ao5:</span>
        <span className="spanNumAverage">{statistics.ao5 / 100 || '- -'}</span>
      </div>
      <div className="boxAverage">
        <span className="spanNameAverage">Ao12:</span>
        <span className="spanNumAverage">{statistics.ao12 / 100 || '- -'}</span>
      </div>
      <div className="boxAverage">
        <span className="spanNameAverage">Cuenta:</span>
        <span className="spanNumAverage">{statistics.count || '- -'}</span>
      </div>
    </div>
  );
}

export default Average;
