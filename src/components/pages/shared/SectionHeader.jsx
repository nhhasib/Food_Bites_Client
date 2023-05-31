

const SectionHeader = ({subheader,header}) => {
    return (
        <div className="w-1/4 text-center mx-auto my-8">
            <p className="text-yellow-600 italic py-2">----{subheader}----</p>
            <h1 className="uppercase border-y-4 text-3xl font-bold py-2">{ header}</h1>
        </div>
    );
};

export default SectionHeader;