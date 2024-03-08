import {MdDelete} from "react-icons/md";
function TodoItem({todoName,todoDate,handleDeleteButton})
{
    return <div className="container">
        <div className="row kg-row">
            <div className="col-4">
                {todoName}
            </div>
            <div className="col-3">
                {todoDate}
            </div>
            <div className="col-2 text-center">
                <button type="button" className="btn btn-danger kg-button" onClick={()=>handleDeleteButton(todoName)}><MdDelete /></button>
            </div>
        </div>
    </div>;
}
export default TodoItem;