package com.maneesha.calculator_backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174") // allows your React dev server to call this
public class CalculatorController {

    @PostMapping("/calculate")
    public CalculationResponse calculate(@RequestBody CalculationRequest request) {
        double result;

        switch (request.getOperator()) {
            case "+":
                result = request.getA() + request.getB();
                break;
            case "-":
                result = request.getA() - request.getB();
                break;
            case "*":
                result = request.getA() * request.getB();
                break;
            case "/":
                if (request.getB() == 0) {
                    throw new ArithmeticException("Cannot divide by zero");
                }
                result = request.getA() / request.getB();
                break;
            default:
                throw new IllegalArgumentException("Unknown operator: " + request.getOperator());
        }

        return new CalculationResponse(result);
    }
}

// Request body shape: { "a": 5, "b": 3, "operator": "+" }
class CalculationRequest {
    private double a;
    private double b;
    private String operator;

    public double getA() { return a; }
    public void setA(double a) { this.a = a; }

    public double getB() { return b; }
    public void setB(double b) { this.b = b; }

    public String getOperator() { return operator; }
    public void setOperator(String operator) { this.operator = operator; }
}

// Response body shape: { "result": 8.0 }
class CalculationResponse {
    private double result;

    public CalculationResponse(double result) {
        this.result = result;
    }

    public double getResult() { return result; }
    public void setResult(double result) { this.result = result; }
}