"use client"
import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

const PdfViewerComponent = ({urlPdf}) => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    

  return (
    <div>
      <Document file={urlPdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x,i) => i+1).map((page, index) =>{
            return(
                <Page key={index} pageNumber={page} width={750} canvasBackground='#f5f3ff' className={'mb-3 shadow-md'} renderTextLayer={false} renderAnnotationLayer={false} />

            )
        })}
      </Document>
      <p className='text-center'>
        Total halaman : {numPages}
      </p>
    </div>
  )
}

export default PdfViewerComponent