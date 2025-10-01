"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      setShowError(false);
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const email = formData.get("email") as string;
      const response = await authClient.requestPasswordReset({
        email,
        redirectTo: "/back-office/reset-password",
      });

      if (response.error) {
        setShowError(true);
      }

      toast.success("Se ha enviado un correo para restaurar la contraseña");
    } catch (error) {
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
          <CardTitle>Restaurar contraseña</CardTitle>
          <CardDescription>
            Ingrese su email para restaurar su contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Solicitar restauración de contraseña{" "}
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
