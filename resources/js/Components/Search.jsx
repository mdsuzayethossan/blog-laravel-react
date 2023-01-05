export const Search = () => {
    return (
        <div className="p-4 shadow">
            <form class="group relative">
                <input
                    class="focus:ring-2 focus:ring-[#8bc43f] focus:border-none focus:outline-none appearance-none w-full text-sm leading-6 text-slate-400 border-slate-400 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm"
                    type="text"
                    aria-label="Filter projects"
                    placeholder="Search here..."
                />
                <svg
                    width="40"
                    height="42"
                    fill="currentColor"
                    style={{
                        background:
                            "linear-gradient(137.06deg, #97D446 1.96%, #6EAC0D 115.89%)",
                        borderRadius: "0px 5px 5px 0px",
                    }}
                    class="absolute right-0 pt-[10.5px] px-[10.5px] top-1/2 -mt-[21px] text-white pointer-events-none"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                </svg>
            </form>
        </div>
    );
};
