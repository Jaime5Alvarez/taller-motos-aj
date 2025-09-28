"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  Calendar,
  Car,
  Euro,
  Fuel,
  Gauge,
  Image as ImageIcon,
  Plus,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { apiClient } from "@/lib/interceptor";
import { type VehicleSchema, zVehicleSchema } from "@/lib/validations/vehicle";
import type { Vehicle } from "@/types/vehicle";

interface VehicleFormProps {
  vehicle?: Vehicle; // Si existe, estamos editando
  onSubmit: (data: VehicleSchema) => Promise<{ error?: string }>;
  initialFeatures?: string[];
  initialImages?: string[];
  isLoading?: boolean;
}

export function VehicleForm({
  vehicle,
  onSubmit,
  initialFeatures = [],
  initialImages = [],
  isLoading = false,
}: VehicleFormProps) {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingImages, setUploadingImages] = useState<string[]>([]);

  const isEditing = !!vehicle;

  const form = useForm<VehicleSchema>({
    resolver: zodResolver(zVehicleSchema),
    defaultValues: {
      name: vehicle?.name ?? "",
      description: vehicle?.description ?? "",
      price: vehicle?.price ?? 0,
      mileage: vehicle?.mileage ?? 0,
      year: vehicle?.year ?? new Date().getFullYear(),
      fuel:
        (vehicle?.fuel as "gasolina" | "diesel" | "eléctrico" | "híbrido") ??
        "gasolina",
      features: initialFeatures.map((f) => ({ feature: f })),
      images: initialImages,
    },
  });

  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control: form.control,
    name: "features",
  });

  const addFeature = () => {
    appendFeature({ feature: "" });
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files) return;

    const currentImages = form.getValues("images") || [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setUploadingImages((prev) => [...prev, file.name]);

        const response = await apiClient.post(
          "/api/upload/image",
          formData,
          {},
        );

        if (!response.data) {
          throw new Error("Failed to upload image");
        }

        const result = await response.data;

        // Agregar la nueva URL a las imágenes
        form.setValue("images", [...currentImages, result.imageUrl]);
      } catch (error) {
        console.error("Error uploading image:", error);
        setErrorMessage(
          "Error al subir la imagen. Por favor, inténtalo de nuevo.",
        );
        setShowError(true);
      } finally {
        setUploadingImages((prev) => prev.filter((name) => name !== file.name));
      }
    }

    // Limpiar el input
    event.target.value = "";
  };

  const removeImage = (imageUrl: string) => {
    const currentImages = form.getValues("images") || [];
    const newImages = currentImages.filter((url) => url !== imageUrl);
    form.setValue("images", newImages);
  };

  const onSubmitForm = async (data: VehicleSchema) => {
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
      console.error("Error submitting vehicle form:", error);
      setErrorMessage(
        "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
      );
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 2 },
    (_, i) => currentYear + 1 - i,
  );

  return (
    <>
      <CardHeader>
        <CardTitle>
          {isEditing ? "Editar Vehículo" : "Nuevo Vehículo"}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="space-y-6"
          >
            {/* Información básica */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Vehículo</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Car className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Honda CBR 600RR"
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe las características y estado del vehículo..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio (€)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Euro className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="number"
                            placeholder="15000"
                            className="pl-10"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mileage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kilometraje</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Gauge className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="number"
                            placeholder="50000"
                            className="pl-10"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Año</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                        defaultValue={field.value?.toString()}
                      >
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                            <SelectTrigger className="pl-10">
                              <SelectValue placeholder="Selecciona el año" />
                            </SelectTrigger>
                          </div>
                        </FormControl>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fuel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Combustible</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <div className="relative">
                            <Fuel className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                            <SelectTrigger className="pl-10">
                              <SelectValue placeholder="Selecciona el combustible" />
                            </SelectTrigger>
                          </div>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="gasolina">Gasolina</SelectItem>
                          <SelectItem value="diesel">Diésel</SelectItem>
                          <SelectItem value="eléctrico">Eléctrico</SelectItem>
                          <SelectItem value="híbrido">Híbrido</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Características */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  Características (opcional)
                </h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addFeature}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar
                </Button>
              </div>

              {featureFields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <FormField
                    control={form.control}
                    name={`features.${index}.feature`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Ej: ABS, Sistema de navegación..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFeature(index)}
                    className="text-red-600 hover:text-red-800 h-10 w-10 shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {featureFields.length === 0 && (
                <div className="text-center py-6 text-muted-foreground border-2 border-dashed rounded-lg">
                  <Plus className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No hay características agregadas</p>
                  <p className="text-sm">Las características son opcionales</p>
                </div>
              )}
            </div>

            {/* Imágenes */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-lg font-medium">
                        Imágenes
                      </FormLabel>
                      <div className="relative">
                        <input
                          type="file"
                          multiple
                          accept="image/jpeg, image/png, image/webp"
                          onChange={handleImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={uploadingImages.length > 0}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {uploadingImages.length > 0
                            ? "Subiendo..."
                            : "Subir Imágenes"}
                        </Button>
                      </div>
                    </div>

                    {/* Grid de imágenes */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {(form.watch("images") || []).map((imageUrl) => (
                        <div key={imageUrl} className="relative group">
                          <Image
                            src={imageUrl}
                            alt="Imagen del vehículo"
                            width={96}
                            height={96}
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(imageUrl)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}

                      {uploadingImages.map((fileName) => (
                        <div
                          key={fileName}
                          className="w-full h-24 bg-muted rounded-lg border flex items-center justify-center"
                        >
                          <div className="text-center">
                            <Upload className="h-6 w-6 mx-auto mb-1 animate-pulse" />
                            <p className="text-xs text-muted-foreground">
                              Subiendo...
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {(form.watch("images") || []).length === 0 &&
                      uploadingImages.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
                          <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p>No hay imágenes agregadas</p>
                          <p className="text-sm">
                            Haz clic en "Subir Imágenes" para agregar fotos
                          </p>
                        </div>
                      )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={
                  isSubmitting || isLoading || uploadingImages.length > 0
                }
              >
                {isSubmitting
                  ? isEditing
                    ? "Actualizando..."
                    : "Creando..."
                  : isEditing
                    ? "Actualizar Vehículo"
                    : "Crear Vehículo"}
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
