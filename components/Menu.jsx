import MenuHead from "./MenuHead";
import Products from "./Products";

const Menu = () => {
  return (
    <section className="flex flex-col justify-start mt-20 px-2">
      <MenuHead />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-2">
        <Products />
      </div>
    </section>
  );
};

export default Menu;
