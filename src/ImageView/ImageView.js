import React from 'react';
import './ImageView.css';
import {Link} from 'react-router-dom';

const ImageView = (props) =>{

    console.log(props.location.state.image);

    const {largeImageURL: image, tags, user: owner, pageURL} = props.location.state.image

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="imageView_container">
                        <img className="imageView_img img-responsive" src={image} alt={tags} />
                        <div className="imageView_copyright">
                            <p>&copy;pixabay</p>
                        </div>
                            <div className="imageView_text">
                            <h4>Credit: <span>{owner}</span></h4>
                            <h4>Download: <span><a target="_blank" href={pageURL}>GO TO DOWNLOAD</a></span></h4>
                            <button>
                                <Link to="/">Home</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageView