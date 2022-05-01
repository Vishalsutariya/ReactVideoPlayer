import React, { Component } from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDfH5eWXS6K_5S73PUDg77wVSLUll_VDGI';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Doctor strange in the multiverse of madness');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            }); // can be written as this.setState({videos}) also as per ECMAScript6 syntax
        });


    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);


        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} // can be written as video => this.setState({selectedVideo: video})
                    videos={this.state.videos} />
            </div>
        );
    }

}

ReactDom.render(<App />, document.querySelector('.container'));