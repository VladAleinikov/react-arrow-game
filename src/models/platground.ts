export interface IPlaygroundState {
  currentStep: number,
  steps: IPlaygroundStepsState[]
}
export interface IPlaygroundStepsState{
  currentValue: string
}