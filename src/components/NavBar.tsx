import { ButtonChange } from "./NavBar/index";
import { CookingPot, Leaf, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./NavBar";

export const NavBar = ({ page }: { page?: string }) => {
  const navigate = useNavigate();

  const handleChangePageClick = (newPage: string) => {
    navigate(`/${newPage}`);
  };

  return (
    <div className={`nav-container${page ? `-${page}` : ""}`}>
      <ButtonChange.Root
        onClick={() => {
          handleChangePageClick("plants");
        }}
        page={"plants"}
      >
        Plants
        <ButtonChange.Icon icon={Leaf} className={"icon"} />
      </ButtonChange.Root>
      <ButtonChange.Root
        onClick={() => {
          handleChangePageClick("space");
        }}
        page={"space"}
      >
        Space
        <ButtonChange.Icon icon={Rocket} className={"icon"} />
      </ButtonChange.Root>
      <ButtonChange.Root
        onClick={() => {
          handleChangePageClick("recipe");
        }}
        page={"recipe"}
      >
        Recipe
        <ButtonChange.Icon icon={CookingPot} className={"icon"} />
      </ButtonChange.Root>
    </div>
  );
};
