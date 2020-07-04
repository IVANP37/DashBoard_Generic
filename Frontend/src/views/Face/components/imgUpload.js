import React, { Component } from 'react';
import axios from 'axios';
import FaceIcon from '@material-ui/icons/Face';


require('./style.css');

export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            name: '',
            size: '',
            type: '',
            match: 'Wating..'
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }


    _handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let name = file.name;
        let size = file.size;
        let type = file.type;
        console.log(file);
        console.log(name);
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                name: name,
                size: size,
                type: type
            });
        }

        reader.readAsDataURL(file);

    }

    _handleSubmit = async e => {
        e.preventDefault();
        let file = this.state.file;
        const URI = 'http://localhost:4000/api/test';// Then I put it in an environment variable in an environment variable
        const fd = new FormData();
        fd.append('image', file);
        if (file != '') {
            const res = await axios.post(URI, fd);
            this.setState({
                match: res
            });
            console.log(this.state.file);
        } else {
            alert("You must upload an image!!");
        }
    }


    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = (<img src={require('./images/282x267.jpg')} className="contenedor" alt="" />);
        let $imagePreview1 = (<img src={require('./images/204x148.jpg')} className="contenedor2" alt="" />);
        let $nameImage = this.state.name;
        let $sizeImage = this.state.size;
        let $typeImage = this.state.type;
        let $macth = this.state.match;
        let $wait ='';

        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="contenedor" alt="" />);
            $imagePreview1 = (<img src={imagePreviewUrl} className="contenedor2" alt="" />);
            $wait =(<img src={require('./images/devoops.gif')} alt="" />);
        }
        if ($macth != 'Wating..'){
            $wait =''  
        }
        return (
            <div >

                <table className="table">

                    <tbody>
                        <tr>
                            <td>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"> <div className="card-img-top  " >
                                        {$imagePreview}
                                    </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div >

                                            <table className="table" border="1px" >
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <form onSubmit={this._handleSubmit}>
                                                                <label>
                                                                    <h5 className="card-title"><b>Select image for recognition:</b></h5>

                                                                    <input type="file" onChange={this._handleImageChange} name="file" />
                                                                </label>

                                                                <label>
                                                                    <h5 className="card-title"><b>Upload Image for facial recognition: </b></h5>
                                                                    <button className="submitButton"
                                                                        type="submit"
                                                                    >Upload Image</button>
                                                                </label>
                                                            </form>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                            <td> <div className="card w-100">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Analysis image:</b> <br />{$imagePreview1}<br /><b>
                                        Image Name: {$nameImage}<br />
                                        Image Size: {$sizeImage}<br />
                                        Image Type:{$typeImage}</b></li>
                                    <li className="list-group-item">
                                        <i>Name image Mash:{$macth}</i><br />
                                         {$wait}<br />
                                    </li>
                                    <li className="list-group-item">
                                        <FaceIcon />
                                        Facial recognition through profile images and others
                                    </li>
                                </ul>

                            </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        );
    }



}