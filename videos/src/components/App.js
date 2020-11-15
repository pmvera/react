import React from 'react';
import SearcBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

const KEY = "AIzaSyDutJ6jUbUX7ugpylArGCI0rGr1m-MSNPA";

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentWillMount() {
        this.onTermSubit('cars');
    }

    onTermSubit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        })

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearcBar onFormSubmit={this.onTermSubit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;