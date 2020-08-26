import express from 'express';
import {Products} from './product';



function getProducts(){
    let p = new Products();
    p.Id="sde123";
    p.Title="The hating game";
    p.price=200
    return p;
}

const app = express();
const port= 3000;
let bookinfo=getProducts();
console.log(bookinfo);
app.get('/products',(req,res)=>{
    res.send(bookinfo);
})

app.listen(port,err=>{
    if(err){
        return console.error(err);
    }
    console.log("server is running on Port "+port);
    
})