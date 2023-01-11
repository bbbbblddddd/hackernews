import React from 'react';
import StoryListItem from './StoryListItem';

const StoryList = ({stories}) => {

    const storyItems = stories.map((story, index) => {
        return <StoryListItem key= {index} story={story} />
    })

    return (
        <div className="story-list">
        <h3>Story List</h3>
        <ul>
          {storyItems}
        </ul>
      </div>
    )

}

export default StoryList;