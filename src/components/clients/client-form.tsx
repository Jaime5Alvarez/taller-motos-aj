"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientSchema, zClientSchema } from "@/lib/validations/client";
import { useForm } from "react-hook-form";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Client } from "@/types/client";

interface ClientFormProps {
  client?: Client; // Si existe, estamos editando; si no, estamos creando
  onSubmit: (data: ClientSchema) => Promise<{ error?: string }>;
  isLoading?: boolean;
}

export function ClientForm({ client, onSubmit, isLoading = false }: ClientFormProps) {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!client;

  const form = useForm<ClientSchema>({
    resolver: zodResolver(zClientSchema),
    defaultValues: {
      name: client?.name ?? "",
      email: client?.email ?? "",
      phone: client?.phone ?? "",
    },
  });

  const onSubmitForm = async (data: ClientSchema) => {
    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage("");

    try {
      const result = await onSubmit(data);

      if (result.error) {
        setErrorMessage(result.error);
        setShowError(true);
      }
      // Si no hay error, el componente padre manejará la navegación
    } catch (error) {
      console.error("Error submitting client form:", error);
      setErrorMessage("Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.");
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isEditing ? "Editar Cliente" : "Nuevo Cliente"}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="space-y-6"
          >
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="Juan Pérez García" 
                          className="pl-10"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            type="email"
                            placeholder="juan.perez@ejemplo.com" 
                            className="pl-10"
                            {...field} 
                          />
                        </div>
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
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            type="tel"
                            placeholder="+34 612 345 678" 
                            className="pl-10"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting 
                  ? (isEditing ? "Actualizando..." : "Creando...") 
                  : (isEditing ? "Actualizar Cliente" : "Crear Cliente")
                }
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      {showError && (
        <CardFooter>
          <Alert variant="destructive" className="w-full">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </>
  );
}
