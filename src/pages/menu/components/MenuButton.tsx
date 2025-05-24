interface MenuButtonProps {
  icon: string;
  name: string;
  onClick?: () => void;
}

const MenuButton = ({ icon, name, onClick }: MenuButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-[1rem]">
      <img src={icon} />
      <span className="title-semi-16 text-CGray-1">{name}</span>
    </button>
  );
};

export default MenuButton;
