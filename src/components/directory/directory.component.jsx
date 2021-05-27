import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";



class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://images.pexels.com/photos/5662927/pexels-photo-5662927.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: "shoes",
          imageUrl: "https://images.pexels.com/photos/2929281/pexels-photo-2929281.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          id: 3,
          linkUrl: 'shoes'
        },
        {
          title: "mens",
          imageUrl: "https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            id: 4,
          size: 'large',
          linkUrl: 'mens'
        },
        {
          title: "womens",
          imageUrl: "https://images.pexels.com/photos/6743989/pexels-photo-6743989.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            id: 5,
          size: 'large',
          linkUrl: 'womens'
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem  key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
