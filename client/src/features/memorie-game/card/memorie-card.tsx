import React, { FC } from 'react';

interface MemorieCardProps {
    id: string;
    text: string;
}

interface MemorieCardState {
    flipped: boolean; //if true, show image of card
}


class MemorieCard extends React.Component<MemorieCardProps, MemorieCardState> {
    constructor(props: MemorieCardProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <div className='memorie-card' data-testid={`memorie-card-${this.props.id}`}>
                    <p>{this.props.text}</p>
                </div>
            </>
          );        
    }

}

export default MemorieCard;