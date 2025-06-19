import LinkList from './LinkList';

const Navbar = () => {
    return (
        <nav className="fixed bg-black/50 top-0 left-0 w-full h-12 backdrop-blur-2xl z-50">
            <LinkList />
        </nav>
    );
};

export default Navbar;
