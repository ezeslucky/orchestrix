
export type TFilterOperatorHelper<
  TOperatorConfigs,
  K extends keyof TOperatorConfigs,
  TTargetFilter,
> = TTargetFilter extends TOperatorConfigs[K] ? K : TOperatorConfigs[K] extends TTargetFilter ? K : never;
