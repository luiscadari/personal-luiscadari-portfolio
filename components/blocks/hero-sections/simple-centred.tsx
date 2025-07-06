import {Button} from "@/components/ui/button";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import ContatoForm from "@/components/ui/contato-form";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
    return (
        <>
            {/* Hero */}
            <div>
                <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
                    {/* End Announcement Banner */}
                    {/* Title */}
                    <div className="mx-auto mt-5 max-w-2xl text-center">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            👋 Luís Cadari | Web Developer
                        </h1>
                    </div>
                    {/* End Title */}
                    <div className="mx-auto mt-5 max-w-3xl text-center">
                        <p className="text-muted-foreground text-xl">
                            Desenvolvendo aplicações web modernas e escaláveis com as
                            melhores tecnologias e práticas do mercado.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-8 flex justify-center gap-3">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size={"lg"}> Contrate meus serviços 🤝 </Button>
                            </DialogTrigger>
                            <ContatoForm/>
                        </Dialog>
                        <Link href={"/about"}>
                            <Button size={"lg"} variant={"outline"}>
                                Saiba mais 🔎
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* End Hero */}
        </>
    );
}
