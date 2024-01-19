import { Counter } from "./components/Counter";
import { User } from "./components/User";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { RootTimer } from "./components/RootTimer";
import { CounterRed } from "./components/CounterRed";
import { Form } from "./components/Form";

function App() {
  return (
    <main className="bg-indigo-50 p-4">
      <div className="text-center items-center p-4">
        <h1 className="text-3xl font-bold">React + TS</h1>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-2 mb-4">
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
              UseEffect - UseRef
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RootTimer />
          </CardContent>
        </Card>
        <Card className="rounded-md border-spacing-2 border-indigo-400 border-2 bg-indigo-100 text-indigo-950">
          <CardHeader className="pb-1">
            <CardTitle className="font-black">Contador Reducer</CardTitle>
            <CardDescription className="font-semibold">
              UseReducer - UseEffect - UseRef
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CounterRed />
          </CardContent>
        </Card>
        <hr className="col-span-2" />

      </div>
      <Card className="col-span-full container rounded-md border-spacing-2 border-blue-700 border-2 bg-gray-900 text-white">
          <CardHeader className="pb-1">
            <CardTitle className="font-black">Formulario</CardTitle>
            <CardDescription className="font-semibold">
              CustomHooks
            </CardDescription>
          </CardHeader>
          <CardContent className="px-72 text-center">
            <Form />
          </CardContent>
        </Card>
    </main>
  );
}

export default App;
