import React, { FC } from "react";
import type { NavLinkProps } from "react-router-dom";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";

interface INavLinkProps extends NavLinkProps {
  to: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  goBack?: boolean;
}

const NavLink: FC<INavLinkProps> = ({
  to,
  children,
  className,
  goBack,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <>
      {goBack ? (
        <div onClick={() => navigate(-1)} className={`${className ?? ""}`}>
          {children}
        </div>
      ) : (
        <RouterNavLink {...props} to={to} className={`${className ?? ""}`}>
          {children}
        </RouterNavLink>
      )}
    </>
  );
};

export default NavLink;
