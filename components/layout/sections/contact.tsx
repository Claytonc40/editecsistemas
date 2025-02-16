'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  firstName: z
    .string({ message: "Nome é obrigatório" })
    .min(2, { message: "Nome é obrigatório" }),
  lastName: z
    .string({ message: "Sobrenome é obrigatório" })
    .min(2, { message: "Sobrenome é obrigatório" }),
  email: z
    .string({ message: "Email é obrigatório" })
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  subject: z.string({ message: "Assunto é obrigatório" }).min(2).max(255),
  phone: z
    .string({ message: "Telefone é obrigatório" })
    .min(10, { message: "Telefone deve ser um número válido" })
    .max(15, { message: "Telefone deve ser um número válido" }),
  message: z
    .string({ message: "Mensagem é obrigatória" })
    .min(2, { message: "Mensagem é obrigatória" }),
});

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Desenvolvimento Web",
      message: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar email");
      }

      form.reset();
      toast.success("Email enviado com sucesso");
    } catch (error) {
      toast.error("Falha ao enviar email");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contato
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">
              Conecte-se Conosco
            </h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Estamos prontos para transformar suas ideias em soluções digitais
            incríveis! Seja para esclarecer dúvidas, solicitar um orçamento ou
            discutir como podemos ajudar seu negócio a alcançar novos patamares,
            entre em contato conosco
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Telefone / WhatsApp</div>
              </div>

              <div>+55 (34) 99636-7821</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Envie um email</div>
              </div>

              <div>contato@editecsistema.com.br</div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Sobrenome</FormLabel>
                        <FormControl>
                          <Input placeholder="Sobrenome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="exemplo@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(22) 99999-9999"
                            maxLength={15}
                            minLength={10}
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um assunto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Desenvolvimento Web">
                              Desenvolvimento Web
                            </SelectItem>
                            <SelectItem value="Desenvolvimento Mobile">
                              Desenvolvimento Mobile
                            </SelectItem>
                            <SelectItem value="Parcerias">Parcerias</SelectItem>
                            <SelectItem value="Consultoria">
                              Consultoria
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Sua mensagem..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
