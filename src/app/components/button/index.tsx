export const ButtonComponent = () => {
    return (
        <div className="max-w-xl mx-auto font-[sans-serif] mt-12 p-2">
            <div className="bg-gray-50 max-sm:px-4 px-10 py-8 w-full rounded text-center">
                <h1 className="text-xl font-extrabold text-gray-800">
                    Quer atrair mais clientes e destacar seu negócio?
                </h1>
                <div className="mt-4">
                    <p className=" text-sm text-gray-800 leading-relaxed">
                        <br /> Se você tem uma oficina, autopeças, guincho ou é
                        mecânico, agora é a hora de brilhar!
                        <br /> Milhares de clientes estão esperando por você.
                        <br />
                        Anuncie conosco e transforme sua presença online em
                        sucesso! Sua jornada começa agora.
                    </p>
                </div>

                <button
                    type="button"
                    className="mt-6 px-6 py-3 rounded text-white text-sm tracking-wider border-none outline-none bg-gray-800 hover:bg-gray-700"
                >
                    Anuncie conosco
                </button>
            </div>
        </div>
    );
};
