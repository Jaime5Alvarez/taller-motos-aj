"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  Car,
  Mail,
  Phone,
  Plus,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { type ClientSchema, zClientSchema } from "@/lib/validations/client";
import type { Client } from "@/types/client";

interface ClientFormProps {
  client?: Client; // Si existe, estamos editando; si no, estamos creando
  onSubmit: (data: ClientSchema) => Promise<{ error?: string }>;
  onDelete?: () => Promise<{ error?: string }>;
  initialVehicles?: { carName: string; licensePlate: string }[]; // Vehículos iniciales
  isLoading?: boolean;
}

export function ClientForm({
  client,
  onSubmit,
  onDelete,
  initialVehicles = [],
  isLoading = false,
}: ClientFormProps) {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const isEditing = !!client;

  const form = useForm<ClientSchema>({
    resolver: zodResolver(zClientSchema),
    defaultValues: {
      name: client?.name ?? "",
      email: client?.email ?? "",
      phone: client?.phone ?? "",
      vehicles: initialVehicles,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "vehicles",
  });

  const addVehicle = () => {
    append({ carName: "", licensePlate: "" });
  };

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
      setErrorMessage(
        "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
      );
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!onDelete) return;

    setIsDeleting(true);
    setShowError(false);
    setErrorMessage("");

    try {
      const result = await onDelete();

      if (result.error) {
        setErrorMessage(result.error);
        setShowError(true);
      }
      // Si no hay error, el componente padre manejará la navegación
    } catch (error) {
      console.error("Error deleting client:", error);
      setErrorMessage(
        "Ha ocurrido un error al eliminar el cliente. Por favor, inténtalo de nuevo.",
      );
      setShowError(true);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>{isEditing ? "Editar Cliente" : "Nuevo Cliente"}</CardTitle>
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

            {/* Sección de vehículos */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Vehículos (opcional)
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addVehicle}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Vehículo
                </Button>
              </div>

              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end p-4 border rounded-lg"
                >
                  <FormField
                    control={form.control}
                    name={`vehicles.${index}.carName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del Vehículo</FormLabel>
                        <FormControl>
                          <Input placeholder="Toyota Corolla 2020" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`vehicles.${index}.licensePlate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Matrícula</FormLabel>
                        <FormControl>
                          <Input placeholder="1234-ABC" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                    className="text-red-600 hover:text-red-800 h-8 w-8 shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {fields.length === 0 && (
                <div className="text-center py-6 text-muted-foreground border-2 border-dashed rounded-lg">
                  <Car className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No hay vehículos agregados</p>
                  <p className="text-sm">Los vehículos son opcionales</p>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              {/* Botón de eliminar (solo en modo edición) */}
              {isEditing && onDelete && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      type="button"
                      variant="destructive"
                      disabled={isSubmitting || isDeleting || isLoading}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      {isDeleting ? "Eliminando..." : "Eliminar Cliente"}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. El cliente será eliminado permanentemente
                        junto con todos sus vehículos asociados.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel disabled={isDeleting}>
                        Cancelar
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        {isDeleting ? "Eliminando..." : "Sí, eliminar"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}

              {/* Botón de guardar/crear */}
              <Button 
                type="submit" 
                disabled={isSubmitting || isDeleting || isLoading}
              >
                {isSubmitting
                  ? isEditing
                    ? "Actualizando..."
                    : "Creando..."
                  : isEditing
                    ? "Actualizar Cliente"
                    : "Crear Cliente"}
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
