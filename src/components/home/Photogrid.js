import React from "react";
import "../../styles/components/Photogrid.css";

const backgroundUrls = [
  "https://lh5.googleusercontent.com/p/AF1QipOkddqbGXf20LvWFDWjDfWqltnyd_x9qu4n2Bgx=w203-h114-k-no",
  "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
  "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
  "https://lh5.googleusercontent.com/p/AF1QipNA7V3Yjy9q7R_Hc8HbK5qIka4Xrn9v30fYJu7t=w203-h114-k-no",
  "https://lh5.googleusercontent.com/p/AF1QipPqcPrg1GdWn-wfRWiuADFCbxiATjrUIBjS0p-3=w203-h114-k-no",
  "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80",
  "https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
  "https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
  "https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80",
  "https://images.unsplash.com/photo-1583518257225-f9a8081f6a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

const OFFSET = 500;
export default class Photogrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGrid: false };
    this.photogridRef = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.shouldShowGrid);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.shouldShowGrid);
  };

  shouldShowGrid = () => {
    if (!this.photogridRef.current) return;
    const currentOffset = window.pageYOffset;
    const gridOffset = this.photogridRef.current.offsetTop - OFFSET;
    if (!this.state.showGrid && currentOffset > gridOffset) {
      this.setState({ showGrid: true });
      window.removeEventListener("scroll", this.shouldShowGrid);
    }
  };

  render() {
    const photoCards = backgroundUrls.map((url, idx) => {
      return (
        <div
          key={String(idx)}
          className={`photo-card ${this.state.showGrid ? "photo-animate" : "photo-hide"}`}
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      );
    });

    return (
      <div className="photo-grid" ref={this.photogridRef}>
        {photoCards}
      </div>
    );
  }
}
