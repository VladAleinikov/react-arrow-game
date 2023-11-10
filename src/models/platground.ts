export interface IPlaygroundState {
  currentStep: number,
  steps: IPlaygroundStepsState[]
}
export interface IPlaygroundStepsState{
  currentValue: string | null,
  enteredValue: string | null
}