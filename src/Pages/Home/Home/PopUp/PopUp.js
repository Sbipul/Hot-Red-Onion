import React from 'react';
import './PopUp.css'
const PopUp = () => {
    const closePop = () => {
        document.getElementById('popup').style.display = "none"
    }
    return (
        <div>
            <div id="popup" className="popUp">
                <div onClick={closePop} className="cross">
                    <p className="text-end p-0 m-0">close</p>
                </div>
                <div className="row p-3">
                    <div className="col-12 col-md-12 text-center">
                        <table style={{width:'50%',margin:'0 auto'}}>
                            <tr>
                                <th className="text-end px-3">Author</th>
                                <td className="text-start px-3">Bipul Chandro Roy</td>
                            </tr>
                            <tr>
                                <th className="text-end px-3">Technologies</th>
                                <td className="text-start px-3">React,React Bootstrap,FireBase</td>
                            </tr>
                            <tr>
                                <th className="text-end px-3">Total pages</th>
                                <td className="text-start px-3">11</td>
                            </tr>
                            <tr>
                                <th className="text-end px-3">Responsive</th>
                                <td className="text-start px-3">true</td>
                            </tr>
                            <tr>
                                <th className="text-end px-3">Context API</th>
                                <td className="text-start px-3">true</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;