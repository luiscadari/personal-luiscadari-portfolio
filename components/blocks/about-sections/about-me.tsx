"use client";

import React, {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ArrowUpRightIcon, Computer, Paperclip} from "lucide-react";
import {cn} from "@/lib/utils";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import ContatoForm from "@/components/ui/contato-form";

// Types
type CompanyValue = {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    color: string;
    label?: string,
    principles: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        image: string;
    };
    image?: string;
};

// Company values data
const aboutMe: CompanyValue[] = [
    {
        id: "innovation",
        name: "Carreira profissional",
        description:
            "Atualmente estou trabalhando como desenvolvedor full-stack web pleno, focado em criar soluções inovadoras e eficientes. Minha experiência inclui o desenvolvimento de aplicações web modernas, utilizando as melhores práticas e tecnologias do mercado.",
        icon: Computer,
        color: "text-amber-500",
        principles: [
            "Estagiário em programação no Instituto Federal do Paraná (IFPR) - (2022 - 2023)",
            "Desenvolvedor Web Full-Stack na empresa FlexDev Sistemas - 2024",
            "Desenvolvedor Web Full-Stack Pleno na empresa Vexur - 2025",
        ],
        image:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
        id: "integrity",
        name: "Curriculo",
        description:
            "Sou técnico em informática pelo Instituto Federal do Paraná (IFPR), onde desenvolvi uma base sólida em" +
            " programação e desenvolvimento web. Minha formação técnica me proporcionou as habilidades necessárias" +
            " para enfrentar desafios complexos e criar soluções eficientes. Atualmente estou cursando Bacharelado" +
            " em Engenharia de Software na Unicesumar. Tenho diversos cursos e certificações na área de" +
            " desenvolvimento web, você pode conferir meu currículo completo clicando em 'LinkedIn' na parte superior",
        icon: Paperclip,
        color: "text-blue-500",
        label: "Certificações e cursos",
        principles: [
            "Docker",
            "Go: a linguagem da Google",
            "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
            "NLW Pocket: Javascript - Full-stack",
            "Vue JS",
            "Confira mais no meu LinkedIn",
        ],
        image:
            "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function AboutSectionCompanyValues() {
    const [activeValue, setActiveValue] = useState<string>(aboutMe[0].id);

    // Get active value object
    const currentValue =
        aboutMe.find((value) => value.id === activeValue) || aboutMe[0];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
                <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Sobre mim 🤓
                    </h2>
                    <p className="text-muted-foreground">
                        Sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. Aqui estão
                        algumas informações sobre mim e minha carreira profissional até o momento.
                    </p>
                </div>

                <Tabs
                    value={activeValue}
                    onValueChange={setActiveValue}
                    className="space-y-8"
                >
                    {/* Value selection - Tabs for md+ screens, Dropdown for smaller screens */}
                    <div className="mb-8 flex justify-center">
                        {/* Dropdown for small screens */}
                        <div className="w-full md:hidden">
                            <Select value={activeValue} onValueChange={setActiveValue}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a value"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {aboutMe.map((value) => (
                                        <SelectItem key={value.id} value={value.id}>
                                            <div className="flex items-center gap-2">
                                                <value.icon className={cn("h-4 w-4", value.color)}/>
                                                <span>{value.name}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Tabs for medium screens and above */}
                        <TabsList className="hidden h-auto bg-transparent p-1 md:flex">
                            {aboutMe.map((value) => (
                                <TabsTrigger
                                    key={value.id}
                                    value={value.id}
                                    className={cn(
                                        "data-[state=active]:bg-muted gap-2",
                                        "data-[state=active]:border-border border border-transparent",
                                    )}
                                >
                                    <value.icon className={cn("h-4 w-4", value.color)}/>
                                    <span>{value.name}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Value content */}
                    <div className="grid items-center gap-8 md:grid-cols-12">
                        {/* Left column: Value details */}
                        <div className="space-y-6 md:col-span-6">
                            <div className="mb-4 flex items-center gap-4">
                                <div className={cn("rounded-xl p-2.5", "bg-muted")}>
                                    <currentValue.icon
                                        className={cn("h-7 w-7", currentValue.color)}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">{currentValue.name}</h3>
                            </div>

                            <p className="text-muted-foreground text-lg">
                                {currentValue.description}
                            </p>

                            <div className="space-y-3 pt-2">
                                <h4 className="font-medium">{currentValue.label ? currentValue.label : "Histórico"} :</h4>
                                <ul className="space-y-2">
                                    {currentValue.principles.map((principle, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ArrowUpRightIcon
                                                className={cn("mt-0.5 h-5 w-5", currentValue.color)}
                                            />
                                            <span>{principle}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right column: Value image */}
                        <div className="md:col-span-6">
                            {currentValue.image ? (
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src={currentValue.image}
                                        alt={`Illustration of our ${currentValue.name} value`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                                    <div className="absolute right-0 bottom-0 left-0 p-6">
                                        <div
                                            className={cn(
                                                "inline-block rounded-lg px-3 py-1 text-sm text-white",
                                                "bg-black/30 backdrop-blur-sm",
                                            )}
                                        >
                                            {currentValue.name}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                                    <currentValue.icon
                                        className={cn(
                                            "h-24 w-24",
                                            currentValue.color,
                                            "opacity-25",
                                        )}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </Tabs>

                {/* Call-to-action */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                        O programador que você procura está aqui! Estou sempre em busca de novos desafios e
                        oportunidades para crescer profissionalmente. Se você está procurando um desenvolvedor web
                        dedicado e apaixonado, não hesite em entrar em contato.
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg">
                                Entrar em contato
                            </Button>
                        </DialogTrigger>
                        <ContatoForm/>
                    </Dialog>

                </div>
            </div>
        </section>
    );
}
