const express = require('express')
const app = express()

const port = 3000

app.get('/',(req,res) => {
    res.send('MERHABA ITS WORK')
})

app.listen(port,()=>{
    console.log(`Server http://localhost:${port} adresinde başlatıldı..`)
})