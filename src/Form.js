import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import { Card, CardContent, Typography,CardActions ,Button} from "@material-ui/core";
import Icon from '@material-ui/icons/Cancel'
function Form({ setData, clicked  ,setclicked}) {
 let [value,setvalue]=useState({title:'',body:'',id:''});
 let [correct,setcorrect]=useState(0);
 let [title,settitle]=useState('');
 let [body, setbody] = useState('');
let [posttitle, setposttitle] = useState("");
let [postbody, setpostbody] = useState("");


let change=(e)=>{
  let {name,value}=e.target;
  if(name==='name')
setclicked([value,clicked[1],clicked[2]]);
else 
setclicked([clicked[0], clicked[1], value]);

}
  return (
    <Forms>
{
correct===0?'':(<Popup>
  <Typography color="textPrimary" variant="h6">Submitting data to .... https://jsonplaceholder.typicode.com/posts</Typography>


<Flex>
  <Typography color="textPrimary" variant="caption">Title:</Typography>

  <Typography color="textSecondary" variant="body1">{value.title}</Typography>
</Flex>
<Flex>
   <Typography color="textPrimary" variant="caption">ID:</Typography>

  <Typography color="textSecondary" variant="body1">{value.id}</Typography>
</Flex>

<Flex>
   <Typography color="textPrimary" variant="caption">Body:</Typography>

  <Typography color="textSecondary" variant="body1">{value.body}</Typography>
</Flex>
<Icon onClick={()=>{setcorrect(0)}}  style={{postion:'absolute',left:'-20px'}}/>

</Popup>)
}  
      <Card>
        <Typography color="textSecondary" variant="h4">Registration</Typography>
        {!clicked.length && <h5 className="">**Select a User From the left</h5>}
        <CardContent>
          <Flex>
            <Typography color="textPrimary" variant="subtitle1">
              Name :
            </Typography>

            <input
              type="text"
              name="name"
              placeholder="name"
              value={clicked ?clicked[0]: ""}
              onChange={change}
            />
          </Flex>
          <Flex>
            <Typography color="textPrimary" variant="h6">
              Id :
            </Typography>

            <input
              type="text"
              placeholder="Id"
              value={clicked ? clicked[1] : ""}
            />
          </Flex>
          <Flex>
            <Typography color="textPrimary" variant="h6">
              Location :
            </Typography>

            <input
              type="text"
              placeholder="Location"
              name="loc"
              value={clicked ?clicked[2]: ""}
              onChange={change}
            />

          </Flex>
          <Flex>
       

            <Typography color="textPrimary" variant="h6">
              Title :
            </Typography>


            <input type="text" name="title" className="title" onChange={(e)=>{
setposttitle(e.target.value);

            }} />

          </Flex>
            <h5>{title}</h5>
          <Flex>
            <Typography color="textPrimary" variant="h6">
              Body :
            </Typography>


            <input
              type="text"
              name="body"
              className="body"
              placeholder="Body"
onChange={(e)=>{
setpostbody(e.target.value)

}
}

            />
          </Flex>
<h5>{body}</h5>    
        </CardContent>
        <CardActions >
          <Button
            size="large"
            color="secondary"
            onClick={() => {
        
if(clicked.length&&posttitle!==''&&postbody!==''){setcorrect(1);
setbody('')
settitle('')
setvalue({title:posttitle,id:clicked[1],body:postbody})
}
              if (postbody ==='') setbody('Body is required')
              if (posttitle === '') settitle('Title is required');
          
          
            }}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Forms>
  );
}

export default Form;
let Forms = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4,
  h5 {
    text-align: center;
  }
  h5 {
    color: red;
    letter-spacing: 0.4px;
  }
  
`;
let Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  div{
  border:2px solid red;

}
  input {
    padding: 5px;
    margin: 5px;
  }
`;
let Popup=styled.div`
position:absolute;

padding:30px;
background:pink;
`
