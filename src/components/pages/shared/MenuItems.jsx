

const MenuItems = ({ item }) => {
    const { name,image,price,recipe} = item;
    return (
        <div className="flex gap-4 justify-center items-center">
            <div>
                <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[118px]" src={image} alt="" />
            </div>
            <div className="flex">
            <div>
                <h3 className="uppercase font-bold">{name} ----------------</h3>
                <p className="text-gray-500">{recipe}</p>
            </div>
                <p className="text-yellow-600">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;