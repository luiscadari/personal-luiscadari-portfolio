"use client"
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {AlertCircleIcon} from "lucide-react";

export default function ContatoForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const myEmail = "8u5vzsntr@mozmail.com"
    const handleSubmit = () => {
        console.log(name, email, emailMessage)
        if (!name || !email) {
            setMessage("Preencha todos os campos obrigatórios.");
            setError(true)
            setTimeout(() => {
                setMessage("");
                setError(false)
            }, 5000)
            return;
        }
        console.log(name, email, emailMessage)

        const subject = `Contato via site`;

        // Corpo do e-mail pré-preenchido
        const body = `Olá,%0D%0AMeu nome é ${name}.%0D%0A${emailMessage || 'Gostaria de entrar em contato com você.'}%0D%0AAtenciosamente,%0D%0A${name}`;
        window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
        

    }
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>📬 Envie uma mensagem</DialogTitle>
                <DialogDescription>
                    Contrate meus serviços, solicite um orçamento ou tire suas dúvidas. Estou aqui para ajudar!
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
                <div className="grid gap-3">
                    <Label htmlFor="name-1">Nome</Label>
                    <Input onChange={(event) => setName(event.target.value)} id="name-1" name="name"/>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="username-1">Seu
                        e-mail</Label>
                    <Input onChange={(event) => setEmail(event.target.value)} type={"email"}
                           id="username-1" name="email" placeholder={"teste@gmail.com"}/>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="username-1">Sua
                        menssagem</Label>
                    <Input onChange={(event) => setEmailMessage(event.target.value)} type={"text"}
                           id="username-1" name="message" placeholder={"Insira sua mensagem aqui"}/>
                </div>
            </div>
            {error && (
                <Alert variant="destructive">
                    <AlertCircleIcon/>
                    <AlertTitle>Ei!</AlertTitle>
                    <AlertDescription>
                        <p>{message}</p>
                    </AlertDescription>
                </Alert>
            )}

            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancelar ❌</Button>
                </DialogClose>
                <Button onClick={handleSubmit}>Enviar 📨</Button>
            </DialogFooter>
        </DialogContent>
    )
}