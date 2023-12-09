const CategoriesList = [
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Thời trang",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Điện tử",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Đồ chơi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sách",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Gia dụng",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sức khỏe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Thực phẩm",
  },
];

const Categories = () => {
  const handleClick = (name) => {
    console.log("Params display by Catelgory: ", name);
  };

  return (
    <div className="flex flex-wrap gap-3 p-4 h-full shadow-lg">
      <div className="w-full font-bold text-[24px] ">Categories</div>
      <div className="w-full overflow-x-scroll gap-3 flex">
        {CategoriesList.map((category, index) => (
          <div
            key={index}
            className=" flex flex-col items-center cursor-pointer shrink-0  justify-center"
            onClick={() => {
              handleClick(category.name);
            }}
          >
            <div className="bg-white shrink-0 shadow-md p-4">
              <img
                src={category.image}
                alt={category.name}
                className="h-[70px] w-[70px] object-cover mb-4 rounded-full"
              />
              <p className="text-lg text-center font-bold mb-2">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
