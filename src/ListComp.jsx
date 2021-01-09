import React,{useState} from 'react'
import DeleteIcon from "@material-ui/icons/Delete";


export default function ListComp(props) {
    
    const [line, setLine] = useState(false);

    const cutList=()=>
    {
        if(line===true)
        {
            setLine(false);
        }
        else{
            setLine(true)
        }
    }

    return (
        <div className="todo_style"> 
            <span onClick={cutList}>
                <DeleteIcon className="deleteIcon"/>
            </span>
            <li style={{textDecoration: line ? "line-through":"none"}}>{props.text}</li>        

        </div>
    )
}
