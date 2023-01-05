import { Card } from "@/Components/Card";
import Header from "@/Components/Header";
import { Pagination } from "@/Components/Pagination";
import { Search } from "@/Components/Search";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-black underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-black underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-black underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <Header />
                <div className="container grid gap-20 grid-cols-12 mt-[100px]">
                    <div className="col-span-8">
                        {" "}
                        <Card />
                    </div>
                    <div className="col-span-4">
                        <Search />
                    </div>
                </div>
            </div>
            <div className="container">
                <Pagination />
            </div>
        </>
    );
}
