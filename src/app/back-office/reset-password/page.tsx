"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  if (!token) {
    redirect("/back-office/request-reset-password");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      setShowError(false);
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const password = formData.get("password") as string;
      const response = await authClient.resetPassword({
        newPassword: password,
        token,
      });
      if (response.error) {
        setShowError(true);
      }
      toast.success("Contraseña creada correctamente");
      await Promise.resolve(
        setTimeout(() => {
          router.push("/back-office/login");
        }, 1000),
      );
    } catch (_error) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={cn(
        "flex flex-col gap-6 min-h-svh w-full items-center justify-center p-6 md:p-10",
      )}
    >
      <Card className="max-w-sm w-full mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/aj-logo.webp"
              alt="AJ Taller de Motos"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <CardTitle>Crea tu nueva contraseña</CardTitle>
          <CardDescription>Ingrese su nueva contraseña</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Nueva contraseña</Label>
                <Input
                  id="email"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Crear nueva contraseña{" "}
                  {isLoading && (
                    <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          {showError && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Ha ocurrido un error al restaurar la contraseña
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
