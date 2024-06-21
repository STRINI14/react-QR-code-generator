import React, {useState} from 'react'
import QRCode from 'qrcode'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
        width: 800,
        margin: 2,
       
    }, (err, url) => {
      if (err) return console.error(err)
        setQrcode(url)
    })
  }

  return (
      <div className='App'> 
       <h1>QR Code Generator</h1>
       <input type="text"placeholder= "Add a website link to create a QR code" value={url} onChange={(evt) => setUrl(evt.target.value)}/>
       <button onClick={GenerateQRCode}>Generate</button>
       {qrcode && <>
         <img src={qrcode} />
         <a href={qrcode} download="qrcode.png">Download QR Code</a>
        </>}
        
      </div>

  )
}

export default App
