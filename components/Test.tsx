import { Weather } from "@/types/weather";
import { Button } from "./Button";

export type Props = {
  greeting: string;
  peak: Weather;
};

export default function Test({ greeting, peak }: Props) {
  // methods
  const handleClick = () => alert("Heya");
  const submit = () => console.log("todo");
  const testFunc = () => {
    handleClick();
    submit();
  };

  return (
    <div>
      <h1>{peak.name}</h1>
      <Button onClick={testFunc}>
        <span>hi</span>
      </Button>
      <Button onClick={submit} type="submit">
        <span>hello</span>
      </Button>
    </div>
  );
}
