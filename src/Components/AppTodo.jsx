import {useRef} from "react";
import {IoMdAdd} from "react-icons/io";
function AppTodo({handleAddButton})
{
    let itemName=useRef();
    let itemDate=useRef();
    const handleAdd=()=>
    {
        if(itemName.current.value==='' || itemDate.current.value===''){
            return;
        }
        let item=itemName.current.value;
        let date=itemDate.current.value
        handleAddButton(item,date);
        itemName.current.value="";
        itemDate.current.value="";
    }
    return <div className="container">
        <div className="row kg-row">
            <div className="col-4">
                <input type="text" placeholder="Enter TODO item here" ref={itemName}/>
            </div>
            <div className="col-3">
                <input type="date" ref={itemDate}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button" onClick={handleAdd}><IoMdAdd /></button>
            </div>
        </div>
    </div>;
}
export default AppTodo;