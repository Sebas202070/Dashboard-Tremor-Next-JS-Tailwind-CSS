import { BadgeDelta, Card } from '@tremor/react';

export function BadgeUsageExample() {
  return (
    <Card className="mx-auto max-w-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</h4>
        <BadgeDelta
          deltaType="moderateIncrease"
          isIncreasePositive={true}
          size="xs"
        >
          +9.3%
        </BadgeDelta>
      </div>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$23,456</p>
    </Card>
  );
}