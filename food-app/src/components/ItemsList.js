const ItemsList = ({items}) =>{
    return(
        <div className="p-2 m-2  border-b-1">

           {items.map((item) => (
           
            <div key={item.id} className="mb-4">
            <span className="flex font-medium">
            {item.name}
            </span>
            <span className="text-sm text-green-500">
            {item.rating}
            </span>           
            <p className="text-sm text-gray-400"> {item.description}</p> 
            </div>  
           ))}

          
        </div>

    )
}

export default ItemsList;
