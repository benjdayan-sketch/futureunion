import { useState } from "react";
import { useCMS } from "@/contexts/CMSContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAdmin } = useCMS();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);
    if (success) {
      navigate("/");
    }
  };

  if (isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-2xl font-bold mb-4">You are already logged in</h1>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/20">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Admin Access</CardTitle>
          <CardDescription>Sign in to manage site content</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
