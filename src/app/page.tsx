import { ButtonComponent } from "./components/button";
import { BannerComponent } from "./components/content";
import { FooterComponent } from "./components/footer";
import { HeaderComponent } from "./components/header";

export default function Home() {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,52,0.1)),url(/assets/bg.jpg)] bg-fixed">
            <HeaderComponent />
            <div className="h-screen bg-cover bg-right">
                <BannerComponent
                    sx="
                    flex
                    justify-center
                    items-center
                    text-gray-700
                    font-bold
                    text-4xl
                    h-60
                    p-2
                    mt-0
                "
                    h2sx="text-xl lg:text-3xl mb-4 text-white tracking-widest uppercase"
                    psx="text-sm lg:text-xl text-gray-400"
                    title="Orçamentos e agendamentos em poucos cliques."
                    sub="Solicite orçamentos ou agende o reparo do seu veículo de forma rápida e prática, com apenas alguns cliques."
                />

                <ButtonComponent />
                <FooterComponent />
            </div>
        </div>
    );
}
