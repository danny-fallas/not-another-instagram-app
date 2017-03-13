import React from 'react';
import './Images.css';

const feedURL = 'https://api.unsplash.com/photos?client_id=08aac6aa1c68e14f6e52c4650cd365fa8232f83669850353eba852a566ff3806&per_page=100';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            show: 5
        }
    }
    componentWillMount() {
        fetch(feedURL)
            .then(response => response.json())
            .then((items) => this.setState({ items: items }))
    }
    loadMore() {
        this.setState({ show: this.state.show + 5 })
    }
    render() {
        let items = this.state.items.slice();
        if (this.state.show) {
            items = items.slice(0, this.state.show)
        }
        return (
            <div className="image-wrapper">
                {items.map(item => <ImageComponent key={item.id} id={item.id} feedURL={item.urls.small} altTxt={item.user.name} />)}
                <br />
                <LoadMoreButton loadMore={this.loadMore.bind(this)} />
            </div>
        )
    }
}

class ImageComponent extends React.Component {
    like() {
        this.setState({ images: this.state.images.push() })
    }

    render() {
        let imageSource = this.props.feedURL;
        return (
            <img src={imageSource} alt={this.props.altTxt} />
        )
    }
}
ImageComponent.defaulProps = {
    altTxt: 'Random Alt Text'
}

const LoadMoreButton = (props) => <button onClick={props.loadMore}>Load More...</button>

export default App