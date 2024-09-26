import Items from "./Items";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
    return (
        <header className="flex items-center py-6 bg-opacity-10 border-b">
            <div className="flex flex-row items-center container">
                <div className="flex flex-row items-center gap-12">
                    <Logo />
                    <Search />
                </div>
                <Items />
            </div>
        </header>
    );
}
