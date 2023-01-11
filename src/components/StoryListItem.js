
const StoryListItem = ({story})=> {

    return (
        <li>
            <a href= {story.url}>
            {story.title}
            </a>
        </li>
    )
}

export default StoryListItem