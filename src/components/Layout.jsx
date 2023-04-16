const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} w-full inline-block z-0`}>{children}</div>
  );
};

export default Layout;
