import React, { Component } from "react"
import UniqueID from 'react-html-id'
import mediaItem from 'mediaItem'

export default class Index extends Component {

  constructor(){
    super();
    UniqueID.enableUniqueIds(this);
    this.state = {
      mediaItems:[
        {id:this.nextUniqueId(), url:"https://www.youtube.com/watch?v=U7IruHt4ydA", title:"Vid_1"},
        {id:this.nextUniqueId()}, url:"https://www.youtube.com/watch?v=IPaqC6xsbSw", title:"Vid_2"},
      ]
    };

    console.log(this.state)
  }


  render() {
    return (
      <div className="mediaList">
        <ul>
          {
            this.state.mediaItems.map((media, index) => {
              return(<div><mediaItem
                url={media.url}
                key={media.id}>{media.title}</mediaItem></div>)
            })
          }
        </ul>
      </div>
    );
  }
}
