import React, { Component } from 'react'
import '../styles/ImportExport.css'

export default class ImportExport extends Component {
    readImport(event) {
        let reader = new FileReader()
        reader.onload = function(e) {
            let data = JSON.parse(e.target.result)
            Object.keys(data).forEach(function (k) { 
                localStorage.setItem(k, data[k])
            })
            window.location.reload()
        }
        reader.readAsText(event.target.files[0])
    }

    downloadExport() {
        let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage));
        let a = document.createElement('a');
        a.setAttribute("href",     data);
        a.setAttribute("download", 'data' + ".json");
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    render() {
        return (
            <div className="top-menu">
                <button 
                type="button"
                className="export-button"
                onClick={ this.downloadExport }/>
                <button 
                type="button"
                className="import-button"
                onClick={ () => { document.getElementsByClassName('file-picker').click() } }/>
                <input 
                type="file"
                className="file-picker"
                accept="application/json"
                multiple={ false }
                onChange={ this.readImport } 
                hidden/>
            </div>
          )
    }
}
