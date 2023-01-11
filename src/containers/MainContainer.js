import React, { useState, useEffect } from 'react';
import StoryList from '../components/StoryList';
import Filter from '../components/Filter';

const MainContainer = () => {

    const [stories, setStories] = useState([]);
    const [FilteredStories, setFilteredStories] = useState([]);

    const filterData = (searchTerm) => {
        const filteredData = stories.filter(story => {
            return story.title.includes(searchTerm)
        });

        setFilteredStories(filteredData);
    }



    useEffect(() => {
        getStories();
    }, [getStories])

    const getStories = function () {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(arrayOfStories => {
                const storyPromises = arrayOfStories.slice(0, 8).map(storyId => {
                    return fetch(`https://hacker-news.firebaseio.com/v0//item/${storyId}.json`).then(res => res.json())
                })
                Promise.all(storyPromises)
                    .then(stories => {
                        setStories(stories)
                        setFilteredStories(FilteredStories)
                    })
            })

    }



    return (

        <div className="main-container">
            <h1> Hacker News </h1>
            <Filter filterData= {filterData} />
            <StoryList stories={stories} />
        </div>

    )
}

export default MainContainer