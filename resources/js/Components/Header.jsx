export default function Header() {
    return (
        <div
            style={{
                fill: "linear-gradient(#8BC43F 37.61%, rgba(255, 255, 255, 0) 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            class="py-[100px] text-center bg-gradient-to-b from-[rgb(139,196,63)] to-[rgba(255,255,255)]"
        >
            <h1 className="text-[54px] font-semibold">Our Blog</h1>
            <p className="font-normal text-[18px] max-w-lg mx-auto">
                News from WiztecBD and Around The World of Digital Services
                Agency
            </p>
        </div>
    );
}
