import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import ListComp from './ListComp';
import Particles from 'react-particles-js';
const TodoList =()=>{
    
    const [item, setItem] = useState("");
    
    const [newItem, setnewItem] = useState([]);

    const eventItem  = (event) => {
       
        setItem(event.target.value);
    };

    const addNewItem =() =>{
        setnewItem((preValue)=>{
            return [...preValue,item];
        })

        setItem(" ");
    }
   

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                        <h1>Todo List</h1>
                    <br/>
                        <input type="text" 
                        value={item} 
                        placeholder="Add an item" 
                        onChange={eventItem} 
                        required/>
                        <Button className="newBtn" onClick={addNewItem}>
                            add
                        </Button>
                    <br/>
                    <ol>
                    
                            {
                                newItem.map((val,index)=>{
                                return <ListComp key={index} text={val}/>;
                                 })
                                }
                            
                        
                    </ol>

                </div>
            </div>

        </>
    )

};
export default TodoList;