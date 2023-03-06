import './App.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';

function App(){

  const [value,setValue] = useState(0)

  const names = [
    {
      id : 1,
      ItemName : "Fancy Product",
      Rate : "$40.00-$80.00",
    },
    {
      id : 2,
      ItemName : "Special Item",
      Rate : "$40.00-$80.00",
    },
    {
      id : 3,
      ItemName : "Sale Item",
      Rate : "$40.00-$80.00",
    },
    {
      id : 4,
      ItemName : "Popular Item",
      Rate : "$40.00-$80.00",
    },
    {
      id : 5,
      ItemName : "Fancy Product",
      Rate : "$40.00-$80.00",
    },
    {
      id : 6,
      ItemName : "Special Item",
      Rate : "$40.00-$80.00",
    },
    {
      id : 7,
      ItemName : "Sale Item",
      Rate : "$40.00-$80.00",
    },
    {
      id : 8,
      ItemName : "Popular Item",
      Rate : "$40.00-$80.00",
    },
    
   ]

  return(
     <div>
       <div>
        <NavBar value={value} setValue={setValue}/>
      </div>
      <div className='App'>
      {names.map((data,index)=> <Products key={index} product={data}  value={value} setValue={setValue}/>)}
      </div>
     </div>
  )
}

function NavBar({value}){
   
  const style={
    position: "absolute",
    right: "50px",
  }
  return(
    <div className=''>
      <AppBar position="static">
        <Toolbar>
          <Button sx={style} color="inherit">Cart ({value})</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

function Products({product,value,setValue}) {

  const style = {
    marginBottom: "20px"
  }

  const [add,addToCart] = useState(false)

  return (

    <div className='contain'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.ItemName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.Rate}
        </Typography>
      </CardContent>
        <Button onClick={()=>{
           if(add == false){
            setValue(value+1)
           }
            addToCart(!add)
        }} className='button' sx={style} variant='outlined' size="small">
          {add == true ? "Remove from cart" : "Add to cart"}
          </Button>
    </Card>
    </div>
  )
}

export default App
