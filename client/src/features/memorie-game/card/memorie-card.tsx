import React, { FC } from 'react';

interface MemorieCardProps {
    id: string;
}

interface MemorieCardState {
    flipped: boolean; //if true, show image of card
}


class MemorieCard extends React.Component<MemorieCardProps, MemorieCardState> {


    render(): React.ReactNode {
        return (
            <>
                <div className='memorie-card' data-testid={`memorie-card-${this.props.id}`}>
                    
                </div>
            </>
          );        
    }

}

export default MemorieCard;