import { useState } from "react";
import StepProgressBar, { Step } from "@/components/StepProgressBar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const steps: Step[] = [
    { id: 1, label: "Начало" },
    { id: 2, label: "Заполнение" },
    { id: 3, label: "Проверка" },
    { id: 4, label: "Подтверждение" },
    { id: 5, label: "Завершение" },
  ];

  const simpleSteps: Step[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Step Progress Bar</h1>
          <p className="text-muted-foreground">Компонент прогресс-бара с шагами</p>
        </div>

        {/* Interactive Example */}
        <div className="bg-card border rounded-lg p-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">Интерактивный пример</h2>
            <StepProgressBar steps={steps} currentStep={currentStep} />
          </div>

          <div className="flex justify-center gap-4">
            <Button 
              onClick={handlePrev} 
              disabled={currentStep === 1}
              variant="outline"
            >
              Назад
            </Button>
            <Button onClick={handleReset} variant="secondary">
              Сбросить
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentStep === steps.length}
            >
              Далее
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Текущий шаг: <span className="font-semibold text-foreground">{currentStep} из {steps.length}</span>
          </div>
        </div>

        {/* Simple Example */}
        <div className="bg-card border rounded-lg p-8 space-y-4">
          <h2 className="text-xl font-semibold">Без подписей</h2>
          <StepProgressBar steps={simpleSteps} currentStep={3} />
        </div>

        {/* Completed Example */}
        <div className="bg-card border rounded-lg p-8 space-y-4">
          <h2 className="text-xl font-semibold">Завершено</h2>
          <StepProgressBar steps={steps} currentStep={6} />
        </div>

        {/* First Step Example */}
        <div className="bg-card border rounded-lg p-8 space-y-4">
          <h2 className="text-xl font-semibold">Первый шаг</h2>
          <StepProgressBar steps={steps} currentStep={1} />
        </div>
      </div>
    </div>
  );
};

export default Index;
