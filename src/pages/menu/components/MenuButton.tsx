interface MenuButtonProps {
  icon: string;
  name: string;
}

const MenuButton = ({ icon, name }: MenuButtonProps) => {
  return (
    <button className="flex items-center gap-[1rem]">
      <img src={icon} />
      <span className="title-semi-16 text-CGray-1">{name}</span>
    </button>
  );
};

export default MenuButton;
