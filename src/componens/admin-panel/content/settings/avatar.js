import React from "react";
import "./settings.css";


class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

 

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file)
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
      this.props.submit(this.state.file)
    };

    reader.readAsDataURL(file);
    
    
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className="imgPrew" />;
    } 

    return (
      <div className="previewComponent">
        <div className="imgPreview-settings">{$imagePreview}</div>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => this._handleImageChange(e)}
          />
 
      </div>
    );
  }
}
export default Avatar;
