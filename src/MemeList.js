import React from "react";
import Meme from './Meme.js'
import './App.css';

class MemeList extends React.Component {
    constructor(props) {
        super(props);
        this.updateList = this.updateList.bind(this);

        this.state = {
            list: [{
                "id": "1",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "2",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "3",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "4",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "5",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "6",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "7",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "8",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "9",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "10",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "11",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "12",
                "upvotes": 10,
                "downvotes": 0
            },
            {
                "id": "13",
                "upvotes": 10,
                "downvotes": 0
            }]
        };
    }

    updateList(id, upvotes, downvotes) {
        this.setState({
            list: this.state.list.map(el => (el.id === id ? Object.assign({}, el, { upvotes, downvotes }) : el))
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.list.map(meme => {
                        return (
                            <div className="App">
                                {
                                    <Meme updateList={this.updateList} id={meme.id} upvotes={meme.upvotes} downvotes={meme.downvotes} />
                                }
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}

export default MemeList;