interface IContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: IContainerProps) => <div>{children}</div>;

export default Container;
