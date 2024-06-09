interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <div className="flex mx-10 justify-between items-center">{children}</div>
    );
};

export default Container;
