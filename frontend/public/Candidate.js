import React from 'react';
import Picture from './Picture';
import Position from './Position';

export default function Candidate({ candidate, position }) {
  const { name, id, votes } = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} />
      {name} - {votes}
    </div>
  );
}
