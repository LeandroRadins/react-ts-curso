import { Counter } from "./components/Counter";
import { User } from "./components/User";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Timer } from "./components/Timer";
import { TimerPadre } from "./components/TimerPadre";

function App() {
  return (
    <main className="bg-indigo-50 p-4 h-screen">
      <div className="text-center items-center p-4">
        <h1 className="text-3xl font-bold">React + TS</h1>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <Card className="rounded-md border-spacing-2 border-indigo-400 border-2 bg-indigo-100 text-indigo-950">
          <CardHeader className="pb-1">
            <CardTitle className="font-black">Usuario</CardTitle>
            <CardDescription className="font-semibold">
              UseState
            </CardDescription>
          </CardHeader>
          <CardContent>
            <User />
          </CardContent>
        </Card>
        <Card className="rounded-md border-spacing-2 border-indigo-400 border-2 bg-indigo-100 text-indigo-950">
          <CardHeader className="pb-1">
            <CardTitle className="font-black">Contador</CardTitle>
            <CardDescription className="font-semibold">
              UseState
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Counter />
          </CardContent>
        </Card>
        <Card className="rounded-md border-spacing-2 border-indigo-400 border-2 bg-indigo-100 text-indigo-950">
          <CardHeader className="pb-1">
            <CardTitle className="font-black">Temporizador</CardTitle>
            <CardDescription className="font-semibold">
              UseEffect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TimerPadre />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default App;
