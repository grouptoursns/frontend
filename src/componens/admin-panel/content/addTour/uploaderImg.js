
import "./addTour.css"


import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


function Img(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    getFilesFromEvent: event => myCustomFileGetter(event)
  });

  const files = acceptedFiles.map(f => (
    <li key={f.name}>
      {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
    </li>
  ));

  return (
    <section className="">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>choose image or drop your image here</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

async function myCustomFileGetter(event) {
  const files = [];
  const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
    
    Object.defineProperty(file, 'myProp', {
      value: true
    });

    files.push(file);
  }

  return files;
}
export default Img;