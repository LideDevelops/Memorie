import React, { FC } from 'react';

interface MemorieCardProps {
    id: string;
}

const MemorieCard: FC<MemorieCardProps> = ({id}) => {
  return (
    <>
        <div className='memorie-card' data-testid={`memorie-card-${id}`}>
            
        </div>
    </>
  );
};

export default MemorieCard;