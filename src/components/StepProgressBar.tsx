import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  id: number;
  label?: string;
}

interface StepProgressBarProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const StepProgressBar = ({ steps, currentStep, className }: StepProgressBarProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const stepNumber = index + 1;

          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              {/* Step Circle */}
              <div className="relative flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 z-10",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20 animate-pulse",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground border-2 border-muted-foreground/30"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : isCurrent ? (
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                  ) : (
                    <span className="text-sm">{stepNumber}</span>
                  )}
                </div>
                {step.label && (
                  <span
                    className={cn(
                      "absolute -bottom-6 text-xs font-medium whitespace-nowrap transition-colors duration-300",
                      (isCompleted || isCurrent) ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </span>
                )}
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2">
                  <div
                    className={cn(
                      "h-full transition-all duration-300",
                      isCompleted ? "bg-primary" : "bg-muted-foreground/30"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgressBar;