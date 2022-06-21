import * as React from "react";
import { Link } from "gatsby";
import * as css from "./layout.module.css";

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore} */}
      <div className={css.container}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
