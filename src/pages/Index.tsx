import { useState, useCallback } from "react";
import "@/styles/calculator-app-main-screen.css";
import ButtonGrid from "@/components/Index/ButtonGrid";
import DisplaySection from "@/components/Index/DisplaySection";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

// Maps the calculator's symbols to what the Java backend expects
const OP_MAP: Record<string, string> = {
  "+": "+",
  "−": "-",
  "×": "*",
  "÷": "/",
};

async function calculateOnServer(a: number, b: number, symbol: string): Promise<number> {
  const response = await fetch("http://localhost:8080/api/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ a, b, operator: OP_MAP[symbol] }),
  });

  if (!response.ok) {
    throw new Error("Calculation failed");
  }

  const data = await response.json();
  return data.result;
}

const Index = () => {
  const [currentInput, setCurrentInput] = useState("0");
  const [expression, setExpression] = useState("");
  const [operator, setOperator] = useState<string | null>(null);
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [justEvaluated, setJustEvaluated] = useState(false);

  const handleBtn = useCallback(
    async (key: string) => {
      if (key >= "0" && key <= "9") {
        if (justEvaluated) {
          setCurrentInput(key);
          setExpression("");
          setJustEvaluated(false);
        } else {
          setCurrentInput((prev) => (prev === "0" ? key : prev + key));
        }
        return;
      }

      if (key === ".") {
        if (justEvaluated) {
          setCurrentInput("0.");
          setJustEvaluated(false);
        } else {
          setCurrentInput((prev) => (prev.includes(".") ? prev : prev + "."));
        }
        return;
      }

      if (key === "AC") {
        setCurrentInput("0");
        setExpression("");
        setOperator(null);
        setPrevValue(null);
        setJustEvaluated(false);
        return;
      }

      if (key === "+/-") {
        setCurrentInput((prev) => (parseFloat(prev) * -1).toString());
        return;
      }

      if (key === "%") {
        setCurrentInput((prev) => (parseFloat(prev) / 100).toString());
        return;
      }

      if (["÷", "×", "−", "+"].includes(key)) {
        try {
          if (prevValue !== null && !justEvaluated) {
            const result = await calculateOnServer(prevValue, parseFloat(currentInput), operator!);
            setCurrentInput(result.toString());
            setPrevValue(result);
            setExpression(result.toString() + " " + key);
          } else {
            setPrevValue(parseFloat(currentInput));
            setExpression(currentInput + " " + key);
          }
          setOperator(key);
          setJustEvaluated(false);
          setCurrentInput("0");
        } catch {
          setCurrentInput("Error");
        }
        return;
      }

      if (key === "=") {
        if (operator && prevValue !== null) {
          try {
            const result = await calculateOnServer(prevValue, parseFloat(currentInput), operator);
            setExpression(expression + " " + currentInput + " =");
            setCurrentInput(result.toString());
            setOperator(null);
            setPrevValue(null);
            setJustEvaluated(true);
          } catch {
            setCurrentInput("Error");
          }
        }
      }
    },
    [currentInput, expression, operator, prevValue, justEvaluated]
  );

  return (
    <div className="bg-cream min-h-[100dvh] flex flex-col items-center justify-between px-4 pt-8 pb-6">
      <Navigation />
      <main className="w-full max-w-sm flex flex-col gap-5 flex-1 justify-end" id="calculator">
        <DisplaySection currentInput={currentInput} expression={expression} />
        <ButtonGrid onButtonClick={handleBtn} />
        <Footer />
      </main>
    </div>
  );
};

export default Index;