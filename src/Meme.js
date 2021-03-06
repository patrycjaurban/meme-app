import React from "react";
import './Meme.css';

class Meme extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            upvotes: this.props.upvotes,
            downvotes: this.props.downvotes,
            score: this.props.upvotes - this.props.downvotes,
            isHot: this.props.upvotes - this.props.downvotes > 5 ? true : false
        }
    }

    render(props) {
        const upvoteClick = () => {
            this.setState(prevState => {
                return {
                    upvotes: prevState.upvotes + 1,
                    score: this.state.upvotes - this.state.downvotes + 1
                }
            });
            this.props.updateList(this.state.id, this.state.upvotes, this.state.downvotes);
        }

        const downvoteClick = () => {
            this.setState(prevState => {
                return {
                    downvotes: prevState.downvotes + 1,
                    score: this.state.upvotes - this.state.downvotes - 1
                }
            });
            this.props.updateList(this.state.id, this.state.upvotes, this.state.downvotes);
        }

        return (            
            this.state.isHot ?
            <div>
                <img className="meme" src={`../memes/${this.state.id}.jpg`} alt="Coś się popsuło"></img>
                <div className="memeButtons">
                    <button onClick={upvoteClick} className="btn-upvote" type="button">▲ {this.state.upvotes}</button>
                    {this.state.score}
                    <button onClick={downvoteClick} className="btn-downvote" type="button">▼ {this.state.downvotes}</button>
                </div>
            </div> 
            : null
        )
    }
}

export default Meme;