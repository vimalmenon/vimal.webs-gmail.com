import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

class DocumentUpload extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            documentType :  null,
        };
    }
    updateState(updateState) {
        const state = this.state;
        this.setState({
            ...state,
            ...updateState
        });
    }
    render () {
        const {previous, next} = this.props;
        const {documentType} = this.state;
        return (
            <div class="col-sm-12">
                <div class="row helvetica">
                    <div class="col-sm-12">
                        <span class="segment-heading">Document Upload</span>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <form class="form col-sm-12" role="form" autoComplete="off">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-7 col-sm-12">
                                <ul class="list-group">
                                    <li class="list-group-item py-4" 
                                        onClick={() => {this.updateState({"documentType": (documentType !== "National ID Card" ? "National ID Card": null)})}}>
                                        <div class="row">
                                            <div class="col-2 d-flex align-items-center">
                                                <i class="fa fa-vcard-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-10 col-sm-9 px-0">
                                                National ID Card
                                                <div class="text-muted">Upload a copy or scan of your national ID card.</div>
                                            </div>
                                            <div class="col-1 d-none d-sm-block">
                                                <i style={{fontSize: '20px', fontWeight: 'bold'}} class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                            
                                        </div>
                                    </li>
                                    {documentType === "National ID Card" ? 
                                        <li class="list-group-item"  style={{minHeight: '95px', paddingTop: '25px'}}>
                                            <div  class="row justify-content-center">
                                                <strong>{documentType} Upload</strong>
                                            </div>
                                            <div class="row justify-content-center">
                                                <div class="upload-demo d-flex justify-content-center">
                                                    <i class="fa fa-camera align-self-center" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </li> :
                                        null
                                    }
                                    <li class="list-group-item py-4"  
                                        onClick={() => {this.updateState({"documentType": (documentType !== "Passport" ? "Passport": null)})}}>
                                    <div class="row">
                                            <div class="col-2 d-flex align-items-center">
                                                <i class="fa fa-vcard-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-10 col-sm-9 px-0">
                                                Passport
                                                <div class="text-muted">Upload a photo or scan of your passport photo page.</div>
                                            </div>
                                            <div class="col-1 d-none d-sm-block">
                                                <i style={{fontSize: '20px', fontWeight: 'bold'}} class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    {documentType === "Passport" ? 
                                        <li class="list-group-item"  style={{minHeight: '95px', paddingTop: '25px'}}>
                                            <div  class="row justify-content-center">
                                                <strong>{documentType} Upload</strong>
                                            </div>
                                            <div class="row justify-content-center">
                                                <div class="upload-demo d-flex justify-content-center">
                                                    <i class="fa fa-camera align-self-center" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </li> :
                                        null
                                    }
                                    <li class="list-group-item py-4"   
                                        onClick={() => {this.updateState({"documentType": (documentType !== "Driver's Licence" ? "Driver's Licence" : null)})}}>
                                        <div class="row">
                                            <div class="col-2 d-flex align-items-center">
                                                <i class="fa fa-vcard-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-10 col-sm-9 px-0">
                                               Driver's Licence 
                                               <div class="text-muted">Upload a photo or scan of your driver's licence.</div>
                                            </div>
                                            <div class="col-1 d-none d-sm-block">
                                                <i style={{fontSize: '20px', fontWeight: 'bold'}} class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    {documentType === "Driver's Licence" ? 
                                        <li class="list-group-item"  style={{minHeight: '95px', paddingTop: '25px'}}>
                                            <div  class="row justify-content-center">
                                                <strong>{documentType} Upload</strong>
                                            </div>
                                            <div class="row justify-content-center">
                                                <div class="upload-demo d-flex justify-content-center">
                                                    <i class="fa fa-camera align-self-center" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </li> :
                                        null
                                    }
                                    <li class="list-group-item py-4" 
                                        onClick={() => {this.updateState({"documentType": (documentType !== "Incorporation Form") ? "Incorporation Form": null})}}>
                                        <div class="row">
                                            <div class="col-2 d-flex align-items-center">
                                                <i class="fa fa-vcard-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-10 col-sm-9 px-0">
                                               Incorporation Form Upload
                                               <div class="text-muted">Upload your Incorporation Form / Business Registration Document.</div>
                                            </div>
                                            <div class="col-1 d-none d-sm-block">
                                                <i style={{fontSize: '20px', fontWeight: 'bold'}} class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    {documentType === "Incorporation Form" ? 
                                        <li class="list-group-item"  style={{minHeight: '95px', paddingTop: '25px'}}>
                                            <div  class="row justify-content-center">
                                                <strong>{documentType} Upload</strong>
                                            </div>
                                            <div class="row justify-content-center">
                                                <div class="upload-demo d-flex justify-content-center">
                                                    <i class="fa fa-camera align-self-center" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </li> :
                                        null
                                    }
                                    <li class="list-group-item py-4" 
                                        onClick={() => {this.updateState({"documentType": (documentType !== "Upload Business Logo") ? "Upload Business Logo": null})}}>
                                        <div class="row">
                                            <div class="col-2 d-flex align-items-center">
                                                <i class="fa fa-vcard-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-9 px-0">
                                               Business Logo
                                               <div class="text-muted">Upload Business Logo.</div>
                                            </div>
                                            <div class="col-1 d-none d-sm-block">
                                                <i style={{fontSize: '20px', fontWeight: 'bold'}} class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </li>
                                    {documentType === "Upload Business Logo" ? 
                                        <li class="list-group-item"  style={{minHeight: '95px', paddingTop: '25px'}}>
                                            <div  class="row justify-content-center">
                                                <strong>{documentType} Upload</strong>
                                            </div>
                                            <div class="row justify-content-center">
                                                <div class="upload-demo d-flex justify-content-center">
                                                    <i class="fa fa-camera align-self-center" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </li> :
                                        null
                                    }
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div class="row d-flex justify-content-between">
                            <div class="form-group col-lg-3 col-md-6 col-sm-6">
                                <button class="btn custom-button btn-block" onClick={previous}>
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    &nbsp; Previous
                                </button>
                            </div>
                            <div class="form-group col-lg-3 col-md-6 col-sm-6">
                                <button class="btn custom-button btn-block" onClick={next}>
                                    Skip & Upload Later &nbsp;
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(DocumentUpload);