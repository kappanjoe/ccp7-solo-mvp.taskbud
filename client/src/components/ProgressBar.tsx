import React, { useEffect, useState } from 'react'
import { useSocket } from '../contexts/Socket';

interface Props {
  progress: number;
  isBuddy: boolean;
}

function ProgressBar({ progress, isBuddy }: Props) {
  const { buddy, username } = useSocket();
  const [isPending, setIsPending] = useState(true);
  const percent: string = (progress * 100).toFixed(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsPending(false), 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <h5 className="progress-bar-header">
        { isBuddy ? `${buddy}'s Progress` : `Your Progress${username && ` (${username})` }` }
        { `: ${percent}%` }
      </h5>
      <div className="progress-bar-wrapper">
        <div className={`progress-bar-meter ${ isBuddy && "buddy" }`} style={{ width: `${Number(
          isPending ? 0 : percent
        )}%` }}/>
      </div>
    </div>
  )
}

export default ProgressBar