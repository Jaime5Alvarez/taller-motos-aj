"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";
import { useState } from "react";
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
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      setShowError(false);
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      console.log(e);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      console.log(email, password);

      const response = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/back-office/private",
      });
      if (response.error) {
        setShowError(true);
      }
    } catch (_error) {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
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
          <CardTitle>Iniciar sesión</CardTitle>
          <CardDescription>
            Ingrese su email y contraseña para iniciar sesión
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
              <div className="grid gap-3">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Contraseña"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Login{" "}
                  {isLoading && (
                    <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          
          <Button
            variant="link"
            className="w-full text-muted-foreground"
            onClick={() => router.push("/back-office/request-reset-password")}
          >
            Olvidé mi contraseña
          </Button>
          {showError && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Las credenciales son incorrectas
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
