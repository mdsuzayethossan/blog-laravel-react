export const Pagination = () => {
    return (
        <div>
            {" "}
            <div class="max-w-2xl">
                <ul class="inline-flex -space-x-px">
                    <li>
                        <a
                            href="#"
                            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100  ml-0 rounded-l-lg leading-tight py-2 px-3"
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100  leading-tight py-2 px-3"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            class="bg-blue-50 border border-gray-300 py-2 px-3 dark:bg-[#8bc43f]"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 leading-tight py-2 px-3"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 leading-tight py-2 px-3"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 rounded-r-lg leading-tight py-2 px-3"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
